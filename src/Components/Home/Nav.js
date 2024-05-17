import React from 'react'
import Logo from './assets/Logo.svg'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='navBar'>
      <img src={Logo} alt='Logo' ></img>
      <ul className='navList'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </div>
  )
}

export default Nav
