import '../styles/globals.css'
import '../styles/Normalizer.css'
import '../styles/index.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Paa-Kofi Aidoo</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
