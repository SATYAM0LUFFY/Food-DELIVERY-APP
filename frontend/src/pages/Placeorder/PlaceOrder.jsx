import React, { useContext } from 'react'
import "./PlaceOrder.css"


const PlaceOrder = () => {
  const{ getTotalAmount } = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery info</p>
        <div className="multi-fields">
          <input type="text" placeholder='first name'/>
          <input type="text" placeholder='lastname' />
        </div>
        <input type="email" placeholder='email address' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='city'/>
          <input type="text" placeholder='satet' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zipcode '/>
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p >Subtotal</p>
              <p>{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p >Delivery</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalAmount() + 2}</b>
            </div>
          </div>
          <button >PROCEED TO PAY </button>
        </div>
      </div>
    </form>
  )
}
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/StoreContext'

export default PlaceOrder
