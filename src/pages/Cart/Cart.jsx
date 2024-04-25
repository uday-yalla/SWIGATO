import React, { useContext } from 'react'
import './Cart.css'
import { FoodContext } from '../../Context/Context'
import { food_list } from '../../assets/assets';
import {  Link } from 'react-router-dom';
const Cart = () => { 
  const { showCart,CartItems,removeFromCart,getTotalCartAmount}=useContext(FoodContext);

  return (
    <>
    {showCart? <div className='Cart-container'>
      <div className="cart-items">    
        <h2> Your cart items</h2>
        {food_list.map((item,index)=>{
         
          if(CartItems[item._id]>0){
            
            return(
              <div key={index} className='Cart-items-contents'>
                 <img src={item.image} alt="" />
                 <div className='item-details'>
                 <div className='item-name-desc'>
                 <h3>{item.name}</h3>
                 <p>{item.description}</p>
                 </div>
                <div className='item-price-remove'> 
                  <p> ${item.price}</p>
                  <p>Qty:{CartItems[item._id]}</p>
                 <button onClick={()=>removeFromCart(item._id)}>Remove</button>
                 </div>
                 </div>
              </div>                          
            )
          }       
        })}
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
       <Link to={'/Order'}><button>PROCEED TO CHECKOUT</button></Link>
      </div>
        
             
    </div>:<div className='empty-cart'>
      <h1>YOUR CART IS EMPTY.....</h1>
    </div>}
    </>
    
  )
}

export default Cart