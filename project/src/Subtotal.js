import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getTotal } from './reducer';
function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();
  return (
      <div className='subtotal'>
          <CurrencyFormat
              renderText={(value) => (
                  <>
                      <p>
                          Subtotal ({cart.length} items) :
                          <strong>{` ${value} `}</strong>
                      </p>
                      <strong className='subtotal-gift'>
                          <input type='checkbox' />  This order contains a gift 
                      </strong>
                  </>
              )
              }
              decimalScale={2}
              value={getTotal({cart})}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹'}
          />
          <button className=''>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal