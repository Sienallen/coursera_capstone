import React from 'react';
import Logo from './assets/Logo.svg';
import {Link} from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
  return (
    <div className='navBar'>
      <img src={Logo} alt='Logo' ></img>
      <ul className='navList'>
        <li><Link to="./Home">Home</Link></li>
        <li><Link to="./Home">About</Link></li>
        <li><Link to="./Home">Menu</Link></li>
        <li><Link to="./Home">Reservations</Link></li>
        <li><Link to="./Home">Order Online</Link></li>
        <li><Link to="./Home">Login</Link></li>
      </ul>
    </div>
  )
}

export default Nav
