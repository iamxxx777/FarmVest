import { ThemeProvider } from '../components/themeContext'
import Layout from '../components/Layout/Layout'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
