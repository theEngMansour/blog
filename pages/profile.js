import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Badge, Avatar, Grid } from '@mui/material';
import { AuthLayout } from 'layouts';
import { TextField } from 'components/inputs'
import { FormattedMessage } from 'react-intl';

export default function Register() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <React.Fragment>
        <Head>
            <title>الملف الشخصي</title>
        </Head>
        <AuthLayout title="title.profile">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="flex justify-center my-9">
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={
                                <div className="bg-[#44c455] w-6 h-6 rounded-full text-center text-white"></div>
                            }
                        >
                            <Avatar 
                                className="bg-[#d4d4d6]"
                                alt="Travis Howard"
                                sx={{ width: 100, height: 100 }}
                            />
                        </Badge>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        className="w-[100%]"
                        required
                        label="input.first"
                        type="text"
                        onChange={setName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        className="w-[100%]"
                        required
                        label="input.last"
                        type="text"
                        onChange={setName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        className="w-[100%]"
                        required
                        label="input.email"
                        type="email"
                        onChange={setEmail}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        className="w-[100%]"
                        required
                        label="input.password"
                        type="password"
                        onChange={setPassword}
                    />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
            </Grid>     
        </AuthLayout>
        <br></br>
    </React.Fragment>
    
  )
}
