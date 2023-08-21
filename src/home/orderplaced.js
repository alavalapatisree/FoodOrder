import React from "react";
import { NavBar } from "./Header";
import tick from './order.png'
import { useNavigate } from "react-router-dom";
import Confetti from 'react-confetti';

export default function OrderPlaced(){
    const navigate=useNavigate()
    
    function redirect(){
        navigate('/')
    }
    return(
        <>
        <NavBar/>
        <Confetti/>
        <div className="empty-container1">
        <img src={tick}></img>
        <h1>Order Placed Successfully</h1>
        <p>Thank you for ordering.Visit again</p>
        <button className="order-now" onClick={redirect}>Go To Home page</button>
        </div>
        </>
    )
}