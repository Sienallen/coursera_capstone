import React from 'react'
import Logo from './Logo.svg'

const Nav = () => {
  return (
    <div>
      <img src={Logo} alt='Logo' ></img>
      <ul>
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
