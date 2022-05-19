import React, {useState} from 'react';
import Image from 'next/image';
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
        <div className="flex justify-center flex-col items-center mt-20 mb-10">
            <Image src="/logo/z.png" width={'200px'} height={'70px'} alt="logo"/>
        </div>
        <AuthLayout>
            <h2 className="text-center text-[#424447] m-0 mb-5"><FormattedMessage id={'title.login'}/></h2>
            <TextField 
                required
                label="input.email"
                type="email"
                autoComplete="email" 
                onChange={setEmail}
            />
            <TextField 
                sx={{mt: 2}}
                required
                label="input.password"
                type="email"
                autoComplete="email" 
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
