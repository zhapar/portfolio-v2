import 'tailwindcss/tailwind.css'
import 'styles/globals.scss'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps}></Component>)
}

export default MyApp
