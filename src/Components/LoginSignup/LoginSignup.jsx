import React, { useState } from 'react'
import './LoginSignup.css'
import { assets } from '../../assets/assets';
const LoginSignup = ({setShowForm}) => {
    const [loginState,setLoginState]=useState("Sign up");
  return (
    <div className='Login-sec'>
       <form className='Login-container'>
          <div className="Login-title">
            <h2>{loginState}</h2>
            <img onClick={()=>setShowForm(false)}  src={assets.cross_icon} alt="" />
          </div>
            <div className="Login-inputs">
          {loginState==="Login"?<></>:<input type="text" placeholder='Your Name' required />} 
           <input type="email" placeholder='Your email'required/>
           <input type="password" placeholder='Your password' required/>
            </div>
            <button id='Form-button'>{loginState==="Sign up"?"Create account":"Login"}</button>
           <div className="login-bottom">
            {loginState==="Sign up" ?<p>Already have an account? <span onClick={()=>setLoginState("Login")}>Login.</span></p>:
            <p>Create new Account? <span onClick={()=>setLoginState("Sign up")}>Sign up.</span></p>}            
           </div>
       </form>
        
  
    </div>
  )
}

export default LoginSignup


