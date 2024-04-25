import React, {  useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowForm}) => {
  return (
    <div className='navbar'>
    <h1 className='Title'>SWIGATO.</h1>
        <ul className='nav-menu'>
           <Link to={'/'}> <li>Home</li></Link>
           <a href='#Menu'> <li>Menu</li></a>
           <a href='#Download'><li> Mobile-app</li></a> 
           <a href='#Contact'> <li>Contact</li></a>
        </ul>
        <div className='navbar-right'>
          <div className="search-field">
            <input type="text"   placeholder='Search'/>
          <img  src={assets.search_icn} alt="" className='search' />
          </div>
          <div className="nav-basket">
           <Link to={'/cart'}> <img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
          </div>
            <button onClick={()=>setShowForm(true)}>Sign-in</button>
        </div>

    </div>
  )
}

export default Navbar