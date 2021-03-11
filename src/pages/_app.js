import '../../styles/globals.css'

import { PublisherProvider } from '../publisher'

function MyApp({ Component, pageProps }) {
  return (
    <PublisherProvider>
      <Component {...pageProps} />
    </PublisherProvider>
  )
}

export default MyApp
