import React from 'react'
import './Testimonials.css'
import RatingCards from './RatingCards'
import rainbow from './assets/rainbow_figure.jpg'
import cowPrint from './assets/cow_print_figure.png'
import figure from './assets/figure.jpg'

const ratings = [
  {
    name: 'Bob',
    image: cowPrint,
    rating: '4.5',
    comment: '"The food was amazing, my favorite meal to order here is the Lemon Dessert. I really suggest others to try it!"'
  },
  {
    name: 'Sarah',
    image: rainbow,
    rating: '4.6',
    comment: '"I have been coming here for the past 5 years and not once have I experienced any bad service. If there was something wrong with my order they would resolve it very quickly."'
  },
  {
    name: 'Nick',
    image: figure,
    rating: '4.3',
    comment: '"This is my favorite place to go for lunch. They provide amazing meals. The Bruchetta are a must order for a light brunch."'
  }
]

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <section className='test-header'>
        <h1>Our Customers Comments!</h1>
      </section>
      <section className='rating-grid'>
        {ratings.map((ratings, index) =>
          <RatingCards key={index} ratings={ratings} />
        )}
      </section>
    </div>
  )
}

export default Testimonials
