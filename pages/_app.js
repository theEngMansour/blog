import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'src/theme';
import createEmotionCache from 'src/createEmotionCache';
import msgs from 'site-settings/site-translations';
import RTL from 'site-settings/RTL';
import { AuthContextProvider } from 'layouts'
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { IntlProvider } from 'react-intl';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import '../styles/globals.css';
import '../styles/fonts.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const locale = 'ar';

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if(!showChild){
    return null;
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>فاست فود | Fast Food</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
      </Head>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <IntlProvider locale={locale} messages={msgs[locale]}>
            <RTL> 
              <AuthContextProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {typeof window === 'undefined'? (<></>) : (<Component {...pageProps} />)}
              </AuthContextProvider>
            </RTL>
          </IntlProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

typeof window !== 'undefined' && defineCustomElements(window);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

