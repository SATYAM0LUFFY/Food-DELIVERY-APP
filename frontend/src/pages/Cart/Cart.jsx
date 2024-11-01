import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems , url , removeFromCart ,food_list , getTotalAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if (cartItems[item._id]>0){
            return (<> <div className="cart-items-title cart-items-item " >
              <img src={ url+"/images/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>{cartItems[item._id] * item.price}</p>
              <p className='cross' onClick={()=>{removeFromCart(item._id)}}>X</p>
            </div>
            <hr/></>  )
          }
        })}
      </div>
      <div className="cert-button">
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
          <button onClick={()=>{navigate("/placeorder")}}>PROCEED TO CHEKOUT </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You Have A Promo Code Enter It Here </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promocode ' />
              <button>submmit </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
