import React  from "react";
import Cards from "./cards";
import Cookies from "js-cookie";

export default function Main(){
    const [restaurantData,setRestaurantData]=React.useState([])
    const [offset,setOffset]=React.useState(1)
    function changePage(event){
        if ( event.target.name==='next-page' && offset<20){
                setOffset(prevvalue=>prevvalue+1)
            }
        else if(event.target.name==='prev-page' && offset>1){
                setOffset(prevalue=>prevalue-1)
            }
    }
    React.useEffect(()=> async () => {
        const Url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=9`;
        const jwtToken = Cookies.get("jwtToken");
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: "GET",
        };
        const res = await fetch(Url, options);
        const restData=await res.json()
        setRestaurantData(()=>restData.restaurants)
    },[offset])

    return(
       
        <div className="Main-container">
            <h1>Popular Restaurants</h1>
            <div className="wordings">
                <p>Select Your favourite restaurant special dish and make your day happy...</p>
            </div>
            <hr/>
            <div className="cards-holder">
                {restaurantData.map((items)=> <Cards info={items} key={items.id}/>)}
            </div>
            <div className="page">
                {offset>1 && <button onClick={changePage} name='prev-page'>{"<"}</button>}
                <p>{offset} of 20</p>
               {offset<20 && <button onClick={changePage} name='next-page'>{">"}</button>}
            </div>
        </div>
    )
}