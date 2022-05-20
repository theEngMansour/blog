import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Box, Typography, Avatar, Link as MuiLink } from '@mui/material';
import { AuthLayout } from 'layouts';
import { TextField } from 'components/inputs';
import { FormattedMessage } from 'react-intl';
import { register } from 'hooks/useAuth';

export default function Register() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
    
  const onSubmit = async (event) => {
    event.preventDefault()
    if(loading) return
    setLoading(true)
    try {
        register({name, email, password})
    } catch (e) {
        setHasError(true)
        setLoading(false)
    }
  }


  return (
    <React.Fragment>
        <Head>
            <title>إنشاء حساب</title>
        </Head>
        <AuthLayout title="title.register">
            <div className="flex justify-center my-9">
                <Avatar 
                    className="bg-[#d4d4d6]"
                    alt="Travis Howard"
                    sx={{ width: 100, height: 100 }}
                />
            </div>
            <form onSubmit={onSubmit}>
                <TextField 
                    className="w-[250px] sm:w-[390px]"
                    required
                    label="input.name"
                    type="text"
                    onChange={setName}
                />
                <TextField 
                    className="w-[250px] sm:w-[390px]"
                    sx={{mt: 2}}
                    required
                    label="input.email"
                    type="email"
                    onChange={setEmail}
                />
                <TextField 
                    className="w-[250px] sm:w-[390px]"
                    sx={{mt: 2}}
                    required
                    label="input.password"
                    type="password"
                    onChange={setPassword}
                />
                <div className="flex justify-center">
                    <Button 
                        className="mt-4 w-[40%] text-white hover:bg-[#44c455]"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        <FormattedMessage id={'btn.continue'}/>
                    </Button>
                </div>
            </form>  
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
