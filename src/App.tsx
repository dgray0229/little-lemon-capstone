import { BookingProvider, Nav, Main, Menu, Footer } from './components';
import './App.css'

export function App () {
  return (
    <BookingProvider>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </BookingProvider>
  )
}
