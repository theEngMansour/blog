import React, { useState ,useEffect} from 'react';
import { Button, Grid, Skeleton, Snackbar, Slide } from '@mui/material';
import { TextField } from 'components/inputs'
import { FormattedMessage, useIntl } from 'react-intl';

function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}

const UserDetails = (props) => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [disabled, setDisabled] = useState(true)
    const [showToast, setShowToast] = useState(false);
    const [showPassToast, setShowPassToast] = useState(false);
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);

    const { formatMessage } = useIntl()

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setName(props.name)
    }, [props])

    const handleClick = (Transition) => () => {
        if (name && password){
            setShowToast(false)
            if(password.length < 5) {
                setTransition(() => Transition);
                setOpen(true);
                setShowPassToast(true)
            } else {
                props.userName(name)
                props.password(password)
                props.showAlert(true)
            }
        } else {
            setTransition(() => Transition);
            setOpen(true);
            setShowToast(true)
        }
    }
    
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    {name == undefined ?
                    <Skeleton variant="rectangular" animation="wave" className="bg-gray-200" width={'100%'} height={55} />
                    :
                    <TextField
                        className="w-[100%]"
                        required
                        label="input.first"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    {props.email == undefined ?
                    <Skeleton variant="rectangular" animation="wave" className="bg-gray-200" width={'100%'} height={55} />
                    :
                    <TextField
                        className="w-[100%]"
                        required
                        disabled
                        label="input.email"
                        type="text"
                        value={props.email}
                    />
                    }
                </Grid>
                <Grid item xs={12}>
                    {props.email == undefined ?
                    <Skeleton variant="rectangular" animation="wave" className="bg-gray-200" width={'100%'} height={55} />
                    :
                    <TextField
                        className="w-[100%]"
                        required
                        label="input.password"
                        type="text"
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setDisabled(false)
                        }} 
                    />
                    }
                </Grid>
                <Grid item xs={12}>
                    <div className="flex justify-center">
                        {true == undefined ? 
                        <Skeleton variant="rectangular" animation="wave" className="bg-gray-200" width={'40%'} height={55} />
                        :
                        <Button 
                            className="mt-4 w-[40%] text-white hover:bg-[#d13e3e]"
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ fontFamily: "Montserrat-light"}}
                            disabled={disabled}
                            onClick={handleClick(TransitionDown)}
                        >
                            <FormattedMessage id={'btn.continue'}/>
                        </Button>
                        }
                    </div>
                </Grid>
            </Grid>     

            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message={
                    showToast && formatMessage({id: 'check.fileds'}) || showPassToast && formatMessage({id: 'check.pass'})
                }
                key={transition ? transition.name : ''}
            />
        </React.Fragment>
    )
}

export default UserDetails