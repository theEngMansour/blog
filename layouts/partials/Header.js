import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  AppBar, 
  Toolbar, 
  CssBaseline, 
  Slide,
  Box,
  Tab, 
  Tabs,
  useScrollTrigger
} from '@mui/material';
import { tabsClasses } from '@mui/material/Tabs';
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
  // Tabs
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <Box
                sx={{
                  flexGrow: 1,
                  maxWidth: { xs: 320, sm: 480 },
                  bgcolor: 'background.paper',
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  aria-label="visible arrows tabs example"
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      '&.Mui-disabled': { opacity: 0.3 },
                    },
                  }}
                >
                  <Tab label="الرئيسية" />
                  <Tab label="التصنيفات" />
                  <Tab label="الإعلامين" />
                  <Tab label="حول" />
                  <Tab label="الملف الشخصي" />
                </Tabs>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <p className="underline selection:bg-slate-500 selection:text-red-200" onClick={logout}>logout</p>
    </React.Fragment>
  );
};