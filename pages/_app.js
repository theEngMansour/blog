import msgs from 'site-settings/site-translations';
import { IntlProvider } from 'react-intl';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const locale = 'ar';
  return (
    <IntlProvider locale={locale} messages={msgs[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
 )
}

export default MyApp
