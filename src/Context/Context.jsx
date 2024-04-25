import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const FoodContext = createContext(null)
const FoodContextProvider = (props)=>{
  const[showCart,setShowCart]=useState(false); //state for toggling cart
  const[CartItems,setCartItems]=useState({}) // state for cartitems

  //Add to cart logic
  const addToCart=(itemId)=>{
  if (!CartItems[itemId]) {
      setCartItems((prev)=>({...prev,[itemId]:1}))
      setShowCart(true);
  }
  else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
  }

  //Removing from Cart logic

  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

  }

  //Logic for getting total cart amount

 const getTotalCartAmount=()=>{
  let totalAmount = 0;
  for(const item in CartItems){

  if (CartItems[item]>0) {
    
  let itemInfo = food_list.find((product)=>product._id===item)
  totalAmount+=itemInfo.price 
  *CartItems[item];
  }

  }
  return totalAmount;

 }

    const contextValue={
 
      food_list,
      CartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      showCart,
      setCartItems,
      
    }
    return(
        <FoodContext.Provider value={contextValue}>
        {props.children}
        </FoodContext.Provider>
    )
}
export default FoodContextProvider;