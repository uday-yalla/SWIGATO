import React, {  useRef, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link} from 'react-router-dom'
const Navbar = ({setShowForm}) => {
 const menuRef=useRef();
 const openMenu=()=>{
  menuRef.current.style.right='0';
 }
 const closeMenu=()=>{
  menuRef.current.style.right='-350px';
 }


  return (
    <div className='navbar'>
    <h1  className='Title'>SWIGATO.</h1>
        <ul ref={menuRef} className='nav-menu'>
          <img onClick={closeMenu} className='closeicon' src={assets.close} alt="" />
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
            <img onClick={openMenu} className='menuicon' src={assets.menuicon} alt="" />
        </div>

    </div>
  )
}

export default Navbar