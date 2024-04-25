import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'
import Footer from './Components/Footer/Footer'
import LoginSignup from './Components/LoginSignup/LoginSignup'
const App = () => {
  const [showForm,setShowForm]=useState(false);
  const[inputData,setInputData]=useState('');
  return (
    <>
    {showForm?<LoginSignup  setShowForm={setShowForm}/>:<></>}
    <div className='Container'>
    <Navbar setShowForm={setShowForm}  inputData={inputData} setInputData={setInputData}  />
     <Routes>
     <Route path='/' element={<Home inputData={inputData}/>}/>
     <Route path='/Cart' element={<Cart/>}/>
     <Route path='/Order' element={<Order/>}/>
     </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App