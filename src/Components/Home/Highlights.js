import React from 'react'
import './Highlights.css'
import Cards from './Cards.js'
import greekSaladImage from './assets/greek salad.jpg'
import bruchettaImage from './assets/bruchetta.svg'
import lemonDessertImage from './assets/lemon dessert.jpg'

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary
      croutons.`,
  },
  {
    name: 'Bruchetta',
    image: bruchettaImage,
    price: '$5.99',
    description: `Our Bruchetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];


const Highlights = () => {
  return (
    <div>
      <section className='specials-header'>
        <h1>This week's specials</h1>
        <a href='' className='yellow-button'>Online Menu</a>
      </section>
      <section className='card-grid'>
        {meals.map((meal, index) =>
          <Cards key={index} meal={meal} />
        )}
      </section>
    </div>
  )
}

export default Highlights
