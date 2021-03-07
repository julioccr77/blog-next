import Header from '../components/sections/Header'
import '../styles/globals.css'
import '../styles/style.scss'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
