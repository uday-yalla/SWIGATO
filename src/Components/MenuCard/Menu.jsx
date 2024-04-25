import React from 'react'
import { menu_list } from '../../assets/assets'
import './Menu.css'
const Menu = ({category,setCategory}) => {
  return (
    <div className='Menu-container' id='Menu'>
        <h2>Explore our menu now</h2>
        <p>Satisfy Your Cravings Differently Unleash Your Taste Buds</p>
        <div className="Menu-items">
          {menu_list.map((item,index)=>{
            return(
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Menu-list'>
                  <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
    </div>
  )
}

export default Menu