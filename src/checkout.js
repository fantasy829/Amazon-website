import React from 'react'
import './Checkout.css'
import img1 from './Images/amazonad1.jpg'
import Subtotal from './Subtotal.js'

function checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src={img1}/>

        <div>
            <h2 className='checkout__title'>Your shopping basket</h2>
        </div>

      </div>

      <div className='checkout__right'>

        <Subtotal/>
        {/* {basket item} */}
        {/* {basket item} */}
        {/* {basket item} */}

      </div>


    </div>
  )
}

export default checkout
