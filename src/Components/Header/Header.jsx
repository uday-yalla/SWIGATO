import React, { useContext } from 'react'
import './Header.css'
const Header = () => {
  return ( 
    <div className='Hero-section'>
      <div className="Hero-contents">
       <h2>Order your favourite food now..</h2>
        <p>Nothing brings people together like good food.We are always here to serve you</p>
       <a href='#Menu'> <button>Order Now</button></a>
      </div>
  
    </div>

  )
}

export default Header