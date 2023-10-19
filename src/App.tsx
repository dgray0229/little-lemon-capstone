import { BookingProvider, Nav, Header, BookingForm } from './components';
import './App.css'

function App () {

  return (
    <BookingProvider>
      <Nav />
      <Header />
      <BookingForm />
    </BookingProvider>
  )
}

export default App
