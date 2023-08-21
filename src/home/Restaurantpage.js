import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Menu from "./restaurantmenu";

export default function RestaurantDetails(){
    const [restaurantMenu,setRestaurantMenu]=React.useState({})
    const restrauntId=useParams().id
    React.useEffect(()=>async()=>{
        const Url = `https://apis.ccbp.in/restaurants-list/${restrauntId}`;
        const jwtToken = Cookies.get("jwtToken");
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: "GET",
        };
        const response = await fetch(Url, options);
        const Data=await response.json()
        setRestaurantMenu(()=>Data)
    },[])
    return(
       <>
        <Header/>
        { <Menu restraunt={restaurantMenu} key={restrauntId}/>}
        <Footer/>
       </>
        
    )
}