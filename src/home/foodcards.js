import React, { useEffect } from "react";
import star from "./star icon.png";
import { useContext } from "react";
import {CartContext} from './cartcontext';

export default function FoodCards(props){
    const [food,setFood]=React.useState({...props.info,restaurantId:props.restaurantId})
    const [cartItems,updateCartItems]=useContext(CartContext)
    
    function addQn(){ 
        setFood(prev=>{
            return{...prev,foodQuantity:1}})
        updateCartItems({...food,foodQuantity:1})
    }
    
    function addQuantity(){
        setFood(prev=>{
            return{...prev,foodQuantity:(prev.foodQuantity)+1}})
        updateCartItems({...food,foodQuantity:food.foodQuantity+1})
    }
    
    function subQuantity(){
        setFood(prev=>{
            return{...prev,foodQuantity:(prev.foodQuantity)-1}})
        updateCartItems({...food,foodQuantity:food.foodQuantity-1})
    }
    
    
    const num=(cartItems?.filter(el=>el?.id===food.id))?.[0]?.foodQuantity
    
    console.log(num)
    return(
        <div className="container" >
            <img src={food.image_url} className="food-img"></img>
            <div className="food-content">
                <h2 className="food-name">{food.name}</h2>
                <p className="food-type">${food.cost}</p>
                <div className="food-rating">
                    <img src={star}></img>
                    <p>{food.rating}</p> 
                </div>
                {(num?false:true) && <button className="add" onClick={addQn}>ADD</button>}
               {  !(num?false:true)  && <div className="btn">
                    <button onClick={subQuantity}>{"-"}</button>
                    <p className="quantity-num">{num}</p>
                    <button onClick={addQuantity} >{"+"}</button>
                </div>}
            </div>
        </div>
    )
}