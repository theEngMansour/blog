import React, {useState, useEffect, useContext} from 'react';
import * as yup from 'yup';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
    Button, 
    Box, 
    Typography, 
    Avatar, 
    Link as MuiLink 
} from '@mui/material';
import { AuthLayout } from 'layouts';
import { TextField } from 'components/inputs';
import { FormattedMessage, useIntl } from 'react-intl';
import { register } from 'hooks/useAuth';
import { Formik } from 'formik';
import { Loading, Alert } from 'components';
import { useRouter } from 'next/router';
import { AuthContext } from 'layouts/AuthContext';

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [showAlert, setShowAlert] = useState({success: false, error: false})

    const {loggedIn} = useContext(AuthContext)
    const { formatMessage } = useIntl()
    const router = useRouter()
  
    useEffect(() => {
        setTimeout(() => {
          setShowAlert({success: false, error: false})
        }, 5000);
      }, [showAlert])
    
    const validationSchema = yup.object({
        name: yup
            .string()
            .nullable()
            .required(formatMessage({
                id: 'check.name',
                defaultMessage: 'check.name'
            })),
        email: yup
            .string()
            .nullable()
            .email(formatMessage({
                id: 'check.is.email',
                defaultMessage: 'check.is.email'
            }))
            .required(formatMessage({
                id: 'check.email',
                defaultMessage: 'check.email'
            })),
        password: yup
            .string()
            .nullable()
            .min(5, formatMessage({
                id: 'check.number.password',
                defaultMessage: 'check.number.password'
            }))
            .required(formatMessage({
                id: 'check.password',
                defaultMessage: 'check.password'
            }))
    })

    const onSubmit = async (values) => {
        setLoading(true) 
        try {
            await register(values)
            setLoading(false)
            setShowAlert({...showAlert, success: true})
            await setTimeout(() => router.push('/login'), 5000)
        } catch (e) {
            if (e.response.status === 400) {
                setLoading(false)
                setShowAlert({...showAlert, error: true})
            } else {
                console.log(e.message);
                setLoading(false)
            }
        }
    }

    /*
        const handleClose = () => {
            console.log('type')
        }; 
    */

    if(loggedIn) return <h1 className="text-center"><FormattedMessage id={'auth.login'}/></h1>

    return (
        <React.Fragment>
            <Head>
                <title>{formatMessage({id: 'title.register'})}</title>
            </Head>
            <Loading open={loading} /* handleClose={handleClose} */ />
            <br></br>
            <br></br>
            <AuthLayout title="title.register">
                {showAlert.error &&
                    <Alert 
                        type="error" 
                        title={formatMessage({id: 'input.email', defaultMessage: 'input.email'})}
                        text={formatMessage({id: 'loginError', defaultMessage: 'loginError'})}
                    />
                }
                {showAlert.success &&
                    <Alert 
                        type="success" 
                        title={formatMessage({id: 'loginSuccess', defaultMessage: 'loginSuccess'})}
                        text={formatMessage({id: 'router.login', defaultMessage: 'router.login'})}
                    />
                }
                <div className="flex justify-center my-9">
                    <Avatar 
                        className="bg-[#ef4444]"
                        alt="Mansour Ahmed"
                        sx={{ width: 100, height: 100 }}
                    >
                        <Image src={'/svg/users.svg'} width={40} height={40} />
                    </Avatar>
                </div>
                <Formik
                    initialValues={{
                        name: null,
                        email: null,
                        password: null   
                    }}
                    validationSchema={validationSchema}
                    onSubmit = {(values, {resetForm}) => {
                        onSubmit(values);
                        resetForm({values: ""})
                    }}
                >
                {
                    formikProps => (
                        <form onSubmit={formikProps.handleSubmit}>
                            <TextField 
                                name="name"
                                className="w-[250px] sm:w-[390px]"
                                required
                                label="input.name"
                                type="text"
                                value={formikProps.values.name}
                                onChange={formikProps.handleChange}
                                textError={formikProps.touched.name && formikProps.errors.name}
                                error={formikProps.touched.name && formikProps.errors.name? true : null}
                            />
                            <TextField 
                                name="email"
                                className="w-[250px] sm:w-[390px]"
                                sx={{mt: 2}}
                                required
                                label="input.email"
                                type="email"
                                value={formikProps.values.email}
                                onChange={formikProps.handleChange}
                                textError={formikProps.touched.email && formikProps.errors.email}
                                error={formikProps.touched.email && formikProps.errors.email? true : null}
                            />
                            <TextField
                                name="password"
                                className="w-[250px] sm:w-[390px]"
                                sx={{mt: 2}}
                                required
                                label="input.password"
                                type="password"
                                value={formikProps.values.password}
                                onChange={formikProps.handleChange}
                                textError={formikProps.touched.password && formikProps.errors.password}
                                error={formikProps.touched.password && formikProps.errors.password? true : null}
                            />
                            <div className="flex justify-center">
                                <Button 
                                    className="mt-4 w-[40%] text-white hover:bg-[#d83e3e]"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    <FormattedMessage id={'btn.continue'}/>
                                </Button>
                            </div>
                        </form>  
                    )

                }
                </Formik>
                <Box marginTop={2}>
                    <HaveAccount/>
                </Box>      
            </AuthLayout>
            <br></br>
        </React.Fragment>
    )
}

function HaveAccount() {
    return (
        <Typography align="center">
            <Link href="/login" passHref>
                <MuiLink variant="body2">
                    <FormattedMessage id={'haveAccount'}/>
                </MuiLink>
            </Link>
        </Typography>
    )
}
