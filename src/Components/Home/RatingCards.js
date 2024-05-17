import React from 'react'
import './RatingCards.css'
import star from './assets/star.svg'
const RatingCards = (props) => {
  return (
    <div className='rating-card'>
      <img className='pfp' src={props.ratings.image} alt={props.ratings.name}></img>
      <div className='card-header'>
        <h4>{props.ratings.name} </h4>
        <div className='rating'>
          {props.ratings.rating}
          <img src={star} alt='star'></img>
        </div>
      </div>
      <div className='comment'>
        <p>{props.ratings.comment}</p>
      </div>
    </div>
  )
}

export default RatingCards
