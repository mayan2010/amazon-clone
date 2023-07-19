import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{ cart }, dispatch] = useStateValue();

  return (
      <div className='checkout'>
          <div className = 'checkout-left'>
              <img
                  className='checkout-ad'
                  src='https://influencermarketinghub.com/wp-content/uploads/2021/11/Amazon-Display-Ad-Amazon-1024x140.jpg'
                  alt='Ad Banner'
              />
              <div className='checkout-title'>
                  <h1>Your Shopping Cart</h1>
                  {cart.map(item => (
                      <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}/>
                  
                  
                  ))}
              </div>
          </div>
          <div className='checkout-right'>
              <Subtotal/>
          </div>

    </div>
  )
}

export default Checkout