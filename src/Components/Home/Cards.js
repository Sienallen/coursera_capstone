import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className='card'>
      <img src={props.meal.image} alt={props.meal.name}></img>
      <div className='card-header'>
        <h4>{props.meal.name}</h4>
        <span>{props.meal.price}</span>
      </div>
      <div className='card-body'>
        <p>{props.meal.description}</p>
        <a>Order a delivery</a>
      </div>
    </div>
  )
}

export default Cards
