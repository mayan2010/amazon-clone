import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id,
        })
    }
    
  return (
      <div className='checkoutProduct'>
          <img className='checkoutProduct-image'
              src={image}
          />
          <div className='checkoutProduct-info'>
              <p className='checkoutProduct-title' >
                  {title}
              </p>
              <p className='checkoutProduct-price'>
                  <small>₹</small>
                  <strong>{price}</strong>
              </p>
              <div className='checkoutProduct-rating'>
                  {Array(rating).fill().map((_, i) =>
                  (
                      <p>🌟</p>
                
                ))}
              </div>
              <button onClick={removeFromBasket}>Remove the item</button>
          </div>
    </div>
  )
}

export default CheckoutProduct