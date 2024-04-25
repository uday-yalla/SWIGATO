import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <>
    <div className='Footer-container' id='Contact'>
        <div className="Footer-sec-1">
         <h1>SWIGATO.</h1>
     <h3>ABOUT SWIGATO</h3>
     <ul className='About-list'>
     <li> Who We Are</li>
     <li>Blog</li>
     <li>Work With Us</li>
    <li> Contact Us</li>
     </ul>
        </div>
      <div className="Footer-sec-2">
         <h2>SOCIAL LINKS</h2>
          <div className="social-sec">
            <img src={assets.linkedin_pic} alt="" />
            <img src={assets.instagram_pic} alt="" />
            <img src={assets.facebook_pic} alt="" />
            <img src={assets.twitter_pic} alt="" />
            <img src={assets.youtube_pic} alt="" />
          </div>
      </div>
      <div className="Footer-sec-3">
          <h2>GET IN TOUCH</h2>
          <p>+12-34-567890</p>
          <p>swigato.@gmail.com</p>
      </div>
    </div> 
    </>
    
  )
}

export default Footer