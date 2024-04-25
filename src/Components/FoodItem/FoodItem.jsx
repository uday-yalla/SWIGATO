import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { FoodContext } from '../../Context/Context';
const FoodItem = ({id,name,price,description,image,}) => {  
   const {CartItems,addToCart, removeFromCart} = useContext(FoodContext);
  return (
    <div className='Food-item'>
        <div className="Food-item-image-sec">
            <img className='Food-item-image' src={image} alt="" />
        </div>
        <div className="Food-item-info">
            <div className="Food-item-name-rating">
            <p>{name}</p>
                <img src={assets.rating_starts}  alt="" />
            </div>
            <p className='Food-item-desc'>{description}</p>
            <div className="price-add">
            <p className='Food-price'>${price}</p>
            {!CartItems[id] ?  <button onClick={()=> addToCart(id) } className='Add-btn'>ADD</button>: 
            <div className='Counter'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{CartItems[id]}</p>
              <img onClick={()=>addToCart(id)}src={assets.add_icon_green} alt="" />
            </div> }         
            </div>          
        </div>
    </div>
  )
}

export default FoodItem