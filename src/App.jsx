
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage'
import Tours from './Pages/Tours'
import BookPage from './Pages/BookPage'
import ThankYou from './Components/ThankYou/ThankYou'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/tours' element={<Tours />}/>
        <Route path='/tours/book/:id' element={<BookPage />}/>
        <Route path='/thank-you' element={<ThankYou />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
