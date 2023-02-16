import GlobalCSS from '../global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  )
}
