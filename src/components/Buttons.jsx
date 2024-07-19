import React from "react"
import Card from "./Card";
import App from "../App";



function Buttons ({all, filter}) {

    return (
    
       <div className="btn__container">
            <button type="button" className="country__btn" onClick={() => all()}>All Stays</button>
            <button type="button" onClick={() => filter('Norway')} className="country__btn">Norway</button>
            <button className="country__btn" onClick={() => filter('Finland')}>Finland</button>
            <button className="country__btn" onClick={() => filter('Sweden')}>Sweden</button>
            <button className="country__btn" onClick={() => filter('Switzerland')}>Switzerland</button>
       </div>
     
    )
}

export default Buttons;