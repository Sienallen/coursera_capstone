import React from 'react'
import './Footer.css'
import LittleLemonLogo from './Home/assets/LittleLemonLogo.png'

const Footer = () => {
  return (
    <footer>
      <img src={LittleLemonLogo} alt='Little Lemon Logo'></img>
      <section className='footer-columns'>
        <h4>SiteMap</h4>
        <ul>
          <li><a href=''>Home</a></li>
          <li><a href=''>About</a></li>
          <li><a href=''>Menu</a></li>
          <li><a href=''>Rservations</a></li>
          <li><a href=''>Order Online</a></li>
          <li><a href=''>Login</a></li>
        </ul>
      </section>
      <section className='footer-columns'>
        <h4>Contact</h4>
        <ul>
          <li>678 Pisa Ave, Chicago, IL 60611s</li>
          <li>(312) 593-2744</li>
          <li>customer@littlelemon.com</li>
        </ul>
      </section>
      <section>
        <h4>Social Media</h4>
      </section>
    </footer>
  )
}

export default Footer