import React from 'react'
import './Hero.css'
import restaurantFood from './assets/restauranfood.jpg'

const Hero = () => {
  return (
    <>
      <section className='heroSection'>
        <div className='container'>
          <div className='description'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <a href='' className="yellow-button">Reserve a Table</a>
          </div>
          <img src={restaurantFood}  alt='restaurantFood'/>
        </div>
      </section>
    </>
  )
}

export default Hero
