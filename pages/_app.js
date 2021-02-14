
import 'minireset.css'
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { CookieBanner } from '@palmabit/react-cookie-law';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlausibleProvider from 'next-plausible'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <PlausibleProvider domain="nevook.com">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </PlausibleProvider>
    </>
  )
}

export default MyApp
