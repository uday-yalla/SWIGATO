import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/MenuCard/Menu'
import { useState } from 'react'
import FoodMenu from '../../Components/FoodMenu/FoodMenu'
import AppDownlod from '../../Components/App/AppDownlod'
const Home = ({inputData}) => {
  const [ category,setCategory] = useState('All');
  return (
    <div>
      <Header category={category}   setCategory={setCategory} inputData={inputData}  />
      <Menu category={category} setCategory={setCategory}/>
      <FoodMenu category={category} />
      <AppDownlod/>
    </div>
  )
}

export default Home