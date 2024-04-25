import React, {  useContext } from 'react'
import './FoodMenu.css'
import { FoodContext } from '../../Context/Context'
import FoodItem from '../FoodItem/FoodItem';
const FoodMenu = ({category}) => {
  const {food_list}=useContext(FoodContext);
  return (
    <div className='Food-Menu' id='Food-Menu'>
      <h2>Top dishes near you</h2>
      <div className="Food-Menu-list">
        {food_list.map((item,index)=>{       
           if (category==='All'||category===item.category) {
            return <FoodItem  key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
           }
        })}
      </div>
      

    </div>
  )
}

export default FoodMenu