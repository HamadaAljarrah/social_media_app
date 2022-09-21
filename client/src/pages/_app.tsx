import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from '../layouts/Container/Container'
import { Background } from '../layouts/Background/Background'
import { Navbar } from '../layouts/Navbar/Navbar'
import { ThemProvider } from '../context/theme.context'
import { Footer } from '../layouts/Footer/Footer'
import { AuthProvider } from '../context/auth.context'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemProvider>
      <Background>
        <AuthProvider>
          <Container>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Container>
        </AuthProvider>
      </Background>
    </ThemProvider>
  )
}

export default MyApp
