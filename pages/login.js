import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Box, Typography, Link as MuiLink } from '@mui/material';
import { AuthLayout } from 'layouts';
import { TextField } from 'components/inputs'
import { FormattedMessage } from 'react-intl';

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <React.Fragment>
        <Head>
          <title>تسجيل الدخول</title>
        </Head>
        <AuthLayout title="title.login">
          <br></br>
          <TextField 
            className="w-[250px] sm:w-[390px]"
            required
            label="input.email"
            type="email"
            onChange={setEmail}
            error
            textError="d"
          />
          <TextField 
            className="w-[250px] sm:w-[390px]"
            sx={{mt: 2}}
            required
            label="input.password"
            type="password"
            onChange={setPassword}
          />
          <Button 
            className="mt-4 w-[60%] text-white hover:bg-[#44c455]"
            type="submit"
            variant="contained"
            color="primary"
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
