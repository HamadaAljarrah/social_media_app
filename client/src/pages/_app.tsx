import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from '../layouts/Container/Container'
import { Background } from '../layouts/Background/Background'
import { Navbar } from '../layouts/Navbar/Navbar'
import { ThemProvider } from '../context/theme.context'
import { Footer } from '../layouts/footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemProvider>
      <Background>
        <Container>
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
        </Container>
      </Background>
    </ThemProvider>


  )
}

export default MyApp
