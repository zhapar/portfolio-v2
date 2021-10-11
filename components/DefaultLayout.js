import Head from 'next/head'
import Navbar from 'features/Navigation'
import Footer from 'features/Footer'

const getAbsoluteURL = (path) => {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
  return baseURL + path
}

const DefaultLayout = (props) => (
  <>
    <Head>
      <title>Zhapar - Front-end developer</title>
      <meta charSet="utf-8" />
      <meta
        property="og:title"
        key="title"
        content="Zhapar — a front-end developer"
      />
      <meta
        property="og:description"
        key="description"
        content="I am Zhapar, a front-end developer, and I love building user-friendly, simple and delightful websites with attention to details."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://zhapar.netlify.app/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="w-full flex flex-col">
      <Navbar className="flex-shrink-0" />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </div>
  </>
)

export default DefaultLayout

export const getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>
