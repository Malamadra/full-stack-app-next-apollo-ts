import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }
  
  body {
    a {
      text-decoration: none;
    }
  }
  
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
  }  
`

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
