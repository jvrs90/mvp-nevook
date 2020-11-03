
import 'minireset.css'
import '../styles/globals.css'
import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from 'react'
import { CookieBanner } from '@palmabit/react-cookie-law';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getCookie } from '../utils/cookies'



function MyApp({ Component, pageProps }) {
  const [cookies, setCookies] = useState(true)

  useEffect(() => {
    const cookie = getCookie('rcl_consent_given')
    if (cookie) {
      return
    } else {
      document.cookie = "_ga_LZ2JKDZZSZ= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      document.cookie = "_ga= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      document.cookie = "AWSALBCORS= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      document.cookie = "AWSALBCORS= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    }
    console.log(cookie)
  }, [])

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
      {/* <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        cookieName="cookies"
        style={{ background: "#2B373B" }}
        enableDeclineButton
        declineButtonText='Rechazar'
        buttonStyle={{ color: "white", fontSize: "13px", background: 'var(--color-secondary)' }}
        expires={150}
      >
        Éste sitio web utiliza cookies para fines de análitica web y poder mejorar la experiencia de usuario.{" "}
        <span style={{ fontSize: "12px" }}>Nunca se recogen datos personales. Se utiliza Google Analytics para tales fines</span>
      </CookieConsent> */}
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
        onAccept={() => { console.log('Aceptadas') }}
        button
        onDeclineStatistics={declineStatisticsCookie}
      />

    </>
  )
}

export default MyApp
