import './App.css';
import Nav from './Components/Nav'
import Home from './Components/Home';
import Footer from './Components/Footer';
import BookingPage from './Components/Pages/BookingPage'
import {Route, Routes} from 'react-router-dom'
import About from './Components/Pages/About';
import Menu from './Components/Pages/Menu';
import OrderOnline from './Components/Pages/OrderOnline';
import Login from './Components/Pages/Login';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='/OrderOnline' element={<OrderOnline/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer></Footer>

    </>
  );
}

export default App;
