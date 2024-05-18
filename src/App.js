import './App.css';
import Header from './Components/Header';
import Nav from './Components/Home/Nav';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import BookingPage from './Components/BookingPage/BookingPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
      </Routes>

      <Footer></Footer>

    </>
  );
}

export default App;
