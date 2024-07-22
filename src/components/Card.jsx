import React from "react"
import Star from "../images/Starfill.svg"
import Home from "../images/Home_duotone.svg"
import Guests from "../images/User_alt_duotone.svg"



function Card({data}) {
    return (
        <div className="card__container">
            {data.map((item) => {
                return (
                    <div className="card" key={item.id}>
           <div className="top__container">
            
            <span className="superhost" style={{padding: !item.superhost && "0px"}}>{item.superhost === true && "Superhost"}
            <img className="star" src={item.superhost ? Star : null} alt="" />
           </span>

            <img src={item.image} alt="lodge picture" className="card__img" />
            </div>
            <div className="middle__container">
                <p id="title">{item.title}</p>
                <p id="description">{item.description}</p>
                <ul className="list">
                    <img src={Home} alt="" /><li className="list__bedrooms">{item.capacity.bedroom} bedroom</li>
                    <img src={Guests} alt="" /><li className="list__people">{item.capacity.people} guests</li>
                </ul>
            </div>
            <hr className="horizontal__line" />
            <div className="bottom__container">
                <ul className="list">
                    <li id="price">${item.price} <span style={{color:"#4A5567", fontSize:"0.8rem"}}>/night</span></li>
                    <li><img src={Star} alt="" /></li>
                   <li className="rating">{item.rating}</li>
                </ul>
                
            </div>
           
        </div>
                )
            })}
        </div>
    )
}

export default Card;