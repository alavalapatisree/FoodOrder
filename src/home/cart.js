import React, { useEffect } from "react";
import Header ,{NavBar}from "./Header";
import Footer from "./Footer";
import './cart.css';
import { useContext } from "react";
import {CartContext} from './cartcontext';
import { redirect, useNavigate } from "react-router-dom";
import cooking from './cooking 1.png'

export default function Cart(){
    const [cartItems,updateCartItems]=useContext(CartContext)

    return(
        <>
        {cartItems.length>0 ? <Header/> : <NavBar/>}
        {cartItems.length>0 ? <><CartProducts/><Footer/></> : <EmptyPage/>}
     
        </>
    )
}

export function CartProducts(){
    const [cartItems,updateCartItems]=useContext(CartContext)
    const navigate=useNavigate()

    function goToRestaurant(event){
        navigate(`/restaurant/${event.target.name}`)
    }
    function addQuantity(event){
            const obj=cartItems.filter(element=>element.id===event.target.id)
            updateCartItems({...obj[0],foodQuantity:obj[0].foodQuantity+1})
    }
    function subQuantity(event){
            const obj=cartItems.filter(element=>element.id===event.target.id)
            updateCartItems({...obj[0],foodQuantity:obj[0].foodQuantity-1})
    }
    const myfunc=(total,obj)=>total+(obj.foodQuantity*obj.cost)
    const totalCost=cartItems.reduce(myfunc,0)
    
    function removeList(){
        localStorage.removeItem('cart')
        navigate('/cart/order')
        window.location.reload()
    }
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
               { cartItems!==[] && cartItems.map(item=> (
                       <tr>
                            <td style={{width:'40%'}}>
                                <div className="cart-items" >
                                    <img src={item.image_url} name={item.restaurantId} onClick={goToRestaurant} ></img>
                                    <h3 name={item.restaurantId}>{item.name}</h3>
                                </div>
                            </td>
                            <td className="change-quantity">
                                <button  id={item.id} onClick={subQuantity}>{"-"}</button>
                                <p >{item.foodQuantity}</p>
                                <button id={item.id} onClick={addQuantity}>{"+"}</button>
                            </td>
                            <td >${item.foodQuantity*item.cost}</td>
                        </tr>
                        
                    ))}
                </tbody>
                <tfoot>
                <tr style={{height:0,margin:0}}>
                    <td colSpan={3} ><hr/></td>
                </tr>
                <tr>
                    <td colSpan={2}><h2>Order Total</h2></td>
                    <td>${totalCost}</td>
                </tr>
                <tr>
                    <td colSpan={3}><button className="place-order" onClick={removeList}>Place Order</button></td>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}

function EmptyPage(){
    const navigate=useNavigate()
    function redirect(){
        navigate('/')
    }
    return(
        <div className="empty-container">
            <img src={cooking}></img>
            <h1>No Orders Yet!</h1>
            <p>Your cart is empty. Add something from the menu.</p>
            <button className="order-now" onClick={redirect}>Order Now</button>
        </div>
    )
}
