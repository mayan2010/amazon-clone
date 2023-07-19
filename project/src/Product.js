/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  
  const addToCart= () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,

      },
    });
  };
  return (
      <div className='product'>
          <div className='product-info'>
              <p>{title}</p>
              <p className='product-price'>
                  <small>₹</small>
                  <strong>{price}</strong>
              </p>
              <div className='product-rating'>
                    {Array(rating).fill().map((_,i) => ( <p>🌟</p>)) }
                    
                        
                </div>
        
          </div>
          
            <img className='product-image' src={image} alt='product image'></img>
            <button onClick={addToCart}> Add to Basket </button>
    </div>
  )
}

export default Product