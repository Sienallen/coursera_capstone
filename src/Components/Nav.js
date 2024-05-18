import React, {useState} from 'react';
import Logo from './Home/assets/Logo.svg';
import burger from './Home/assets/icon _hamburger menu.svg'
import {Link, NavLink} from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
  const [menu, setMenu] = useState(false)
  return (
    <nav className='navBar'>
      <Link to="./">
        <img src={Logo} alt='Logo' ></img>
      </Link>
      <ul className={(menu ? 'open':'') + ' navList'}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Menu">Menu</NavLink></li>
        <li><NavLink to="/booking">Reservations</NavLink></li>
        <li><NavLink to="/OrderOnline">Order Online</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
      </ul>

      <div className='burger'>
        <img src={burger} alt='burger-icon' onClick={()=>{setMenu(!menu)}}/>
      </div>

    </nav>
  )
}

export default Nav
