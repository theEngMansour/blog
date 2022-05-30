import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  AppBar, 
  Toolbar, 
  CssBaseline, 
  Slide,
  Button,
  useScrollTrigger
} from '@mui/material';

import { AuthContext } from 'layouts/AuthContext';
import { useRouter } from 'next/router';
import { Storage } from '@capacitor/storage';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



export default function Header(props) {
  const {setLoggedIn} = useContext(AuthContext)
  const router = useRouter()

  const logout = async () => {
    await Storage.remove({key: 'accessToken'})
    setLoggedIn(false)
    router.replace('/login')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{bgcolor: 'white'}} variant={0}>
          <Toolbar className="flex flex-col">
            <div className="flex justify-center w-[100%] select-none" variant={0}>
              <Image src="/logo/logokoora.svg" width={'150px'} height={'90px'} alt="logo"/>
            </div>
          </Toolbar>
          <Toolbar>
            <div className="flex justify-center w-[100%] select-none" variant={0}>
              <Button sx={{mx: 1}} className="bg-[#45b97c] text-white">الرئيسية</Button>
              <Button sx={{mx: 1, color: '#5d5f63'}} className="bg-[#ffffff]">التصنيفات</Button>
              <Button sx={{mx: 1, color: '#5d5f63'}} className="bg-[#ffffff]">الإعلامين</Button>
              <Button sx={{mx: 1, color: '#5d5f63'}} className="bg-[#ffffff]">حول</Button>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <p className="underline selection:bg-slate-500 selection:text-red-200" onClick={logout}>logout</p>
    </React.Fragment>
  );
};