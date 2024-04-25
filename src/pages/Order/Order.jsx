import React, { useContext } from 'react'
import './Order.css'
import { FoodContext } from '../../Context/Context'
const Order = () => {
  const {getTotalCartAmount}=useContext(FoodContext);
  return (
    <div className='Order-container'>
      <div className="order">
        <h2>Delivery Address</h2>
      <div className="order-name">
        <p>Firstname</p>
        <input type="text" placeholder='Firstname'  required/>
         <p>Lastname</p>
        <input type="text" placeholder='Firstname'  required/>
      </div>
      <div className="order-details">
        <p>Moble number</p>
        <input type="text" placeholder='Mobile-Number'  required/>
        <p>Email</p>
        <input type="email" placeholder='Email'  required/>
         <p>Address</p>
         <textarea name="" placeholder='Enter your address' id="order-textarea" cols="30" rows="10"></textarea>
      </div>
      <button className='order-button'>Save</button>
      </div>     
   <div className='Total-amount'>
      <h3>PRICE DETAILS</h3>
    <div className='price-contents'>
      <div className="price-title">
     <p>Subtotal</p>
     <hr />
     <p>delivery charges</p>
     <hr />
     <h5>TOTAL PRICE</h5>
     </div>
     <div className='price'>
      <p>${getTotalCartAmount()}</p>
      <p>${5}</p>
      <h4>${getTotalCartAmount()+5}</h4>
     </div>
     </div>
       <button>PLACE ORDER</button>
      </div>
    </div>
  )
}

export default Order