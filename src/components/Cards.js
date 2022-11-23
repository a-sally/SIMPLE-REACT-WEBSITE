import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItems src = 'images/img-9.jpg' text = 'explore the hidden waterfall deep inside the amazon jungle' label='Adventure' path='/services'/>

                    <CardItems src = 'images/img-2.jpg' text = 'travel through the island of bali in a private cruise' label='Luxury' path='/services'/>
                </ul>.
                <ul className='cards__items'>
                    <CardItems src = 'images/img-9.jpg' text = 'explore the hidden waterfall deep inside the amazon jungle' label='Adventure' path='/services'/>

                    <CardItems src = 'images/img-2.jpg' text = 'travel through the island of bali in a private cruise' label='Luxury' path='/services'/>

                    <CardItems src = 'images/img-2.jpg' text = 'travel through the island of bali in a private cruise' label='Luxury' path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
