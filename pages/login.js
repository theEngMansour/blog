import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { Button, Box, Typography, Avatar, Link as MuiLink } from '@mui/material';
import { AuthLayout } from 'layouts';
import { TextField } from 'components/inputs'
import { FormattedMessage, useIntl } from 'react-intl';
import { login } from 'hooks/useAuth';
import { Loading, Alert } from 'components';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showLoading, setShowLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { formatMessage } = useIntl()
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, 3000);
  }, [showAlert])

  const onSubmit = async () => {
    setShowLoading(true)
    try {
      await login({email, password})
      setTimeout(() => setShowLoading(false, 1005))
      router.push('/')
    } catch (e) {
      if (e.response.status === 401) {
        setShowAlert(true)
        setShowLoading(false)
      } else {
        console.log(e.response);
        setShowLoading(false)
      }
    }
  }

  return (
    <React.Fragment>
        <Head>
          <title>تسجيل الدخول</title>
        </Head>
        <Loading open={showLoading} />
        <AuthLayout title="title.login">
          {showAlert &&
            <Alert 
              type="error" 
              title={formatMessage({id: 'email.password', defaultMessage: 'email.password'})}
              text={formatMessage({id: 'errorLogin', defaultMessage: 'errorLogin'})}
            />
          }
          <div className="flex justify-center my-9">
            <Avatar 
              className="bg-[#45b97c]"
              alt="Mansour Ahmed"
              sx={{ width: 100, height: 100 }}
            >
              <RoomPreferencesIcon sx={{ width: 50, height: 50 }} />
            </Avatar>
          </div>
          <TextField 
            className="w-[250px] sm:w-[390px]"
            required
            label="input.email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            className="w-[250px] sm:w-[390px]"
            sx={{mt: 2}}
            required
            label="input.password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            className="mt-4 w-[60%] text-white hover:bg-[#44c455]"
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => onSubmit()}
          >
            <FormattedMessage id={'btn.continue'}/>
          </Button>
          <Box marginTop={2}>
            <NoAccount/>
          </Box>    
        </AuthLayout>
        <br></br>
    </React.Fragment>
    
  )
}

function NoAccount() {
    return (
      <Typography align="center">
        <Link href="/register" passHref>
          <MuiLink variant="body2">
            <FormattedMessage id={'dontHaveAccount'}/>
          </MuiLink>
        </Link>
      </Typography>
    )
  }
