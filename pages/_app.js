
import 'minireset.css'
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { CookieBanner } from '@palmabit/react-cookie-law';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {

  const declineStatisticsCookie = () => {
    document.cookie = "_ga_LZ2JKDZZSZ= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "_ga= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "AWSALBCORS= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "AWSALBCORS= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <CookieBanner
        styles={{
          dialog: { backgroundColor: 'var(--color-secondary)', position: 'fixed', bottom: '0', width: '100%', padding: '20px' },
          button: { backgroundColor: 'var(--color-primary)', margin: '0 10px', color: '#fff', border: '1px solid transparent', padding: '10px', cursor: 'pointer' },
          message: { color: 'white' },
          optionLabel: { color: 'var(--color-primary)', paddingLeft: '20px' }
        }}
        message="Este sitio web utiliza cookies de analisis estadístico para fines de mejora la experiencia del usuaio"
        wholeDomain={true}
        privacyPolicyLinkText='Políticas de privacidad'
        policyLink='/privacy'
        acceptButtonText='Aceptar'
        showDeclineButton
        declineButtonText='Rechazar'
        necessaryOptionText='Necesarias'
        showPreferencesOption={false}
        showMarketingOption={false}
        statisticsOptionText='Estadística'
        button
        onDeclineStatistics={declineStatisticsCookie}
      />

    </>
  )
}

export default MyApp
