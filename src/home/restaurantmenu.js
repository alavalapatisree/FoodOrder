import React from "react";
import star from "./star icon.png";
import "./restaurant.css"
import FoodCards from "./foodcards";

export default function Menu(props){
    const restaurant={...props.restraunt}
    const foods=restaurant.food_items

    return(
        <div>
            <div className="restaurant-card-container">
                <div className="restaurant-card">
                   <div className="restaurant-img" style={{backgroundImage:`URL(${restaurant.image_url})`}}></div>
                    <div className="content">
                        <h2 className="name">{restaurant.name}</h2>
                        <p>{restaurant.cuisine}</p>
                        <p>{restaurant.location}</p>
                        <div className="price-rating">
                            <div className="rating">
                                <div className="rate">
                                    <img src={star}className="a"></img>
                                    <p className="a">{restaurant.rating}</p>
                                </div>
                                <p className="a">{restaurant.reviews_count}</p>
                            </div>
                            <span></span>
                            <div className="rating">
                                <p className="a">{restaurant.cost_for_two}</p>
                                <p className="a">Cost for two</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="food-container">
                {foods?.map((items)=><FoodCards info={items} restaurantId={restaurant.id} key={items.id} />)}
            </div>
        </div>
    )
}