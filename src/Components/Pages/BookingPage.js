import React from 'react'
import './BookingPage.css'

const BookingPage = () => {
  return (
    <div>
      <section className='booking-header'>
        <h1>Table Reservations</h1>
      </section>
      <section>
        <form className='booking-info'>
          <label for='name' className='booking-label'>
            <p>Name</p>
          </label>
          <input type='input' name='name' id='name' className='booking-input'/>

          <label for='phone' className='booking-label'>
            <p>Phone Number</p>
          </label>
          <input type='number' name = 'phone' id='phone' className='booking-input'/>

          <label for='party' className='booking-label'>
            <p>Number of guests</p>
          </label>
          <input type ='number' name = 'party' id= 'party' className='booking-input'/>

          <label for = 'date' className='booking-label'>
            <p>Date</p>
          </label>
          <input type='date' name='date' id='date' className='booking-input'/>

          <label for='time' className='booking-label'>
            <p>Time</p>
          </label>
          <select name='time' id='time' className='booking-input'>
            <option value='12:00pm'>12:00pm</option>
            <option value='1:00pm'>1:00pm</option>
            <option value='2:00pm'>2:00pm</option>
            <option value='3:00pm'>3:00pm</option>
            <option value='4:00pm'>4:00pm</option>
            <option value='5:00pm'>5:00pm</option>

          </select>

          <button type='submit' className='yellow-button' >Make your reservation</button>

        </form>

      </section>
    </div>
  )
}

export default BookingPage
