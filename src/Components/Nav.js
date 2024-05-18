import React from 'react';
import Logo from './Home/assets/Logo.svg';
import {Link, NavLink} from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
  return (
    <div className='navBar'>
      <Link to="./">
        <img src={Logo} alt='Logo' ></img>
      </Link>
      <ul className='navList'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Menu">Menu</NavLink></li>
        <li><NavLink to="/booking">Reservations</NavLink></li>
        <li><NavLink to="/OrderOnline">Order Online</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
