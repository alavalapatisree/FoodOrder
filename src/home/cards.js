import React from "react";
import star from "./star icon.png";
import { useNavigate } from "react-router-dom";

export default function Cards(props){
        const navigate = useNavigate();
      
        function handleClick() {
          navigate(`/restaurant/${props.info.id}`);
        }
    
    return(
            <div className="cards-container" onClick={handleClick}>
                <img src={props.info.image_url} className="card-img"></img>
                <div className="card-content">
                    <h2 className="card-name">{props.info.name}</h2>
                    <p className="card-type">{props.info.cuisine}</p>
                    <div className="rating-section">
                        <img src={star}></img>
                        <p>{props.info.user_rating.rating}</p> 
                        <p> ({props.info.user_rating.total_reviews}) </p>
                    </div>
                </div>
            </div>
    )
}