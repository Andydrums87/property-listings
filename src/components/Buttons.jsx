import React, { useState } from "react"
import Card from "./Card";
import App from "../App";



function Buttons ({all, data, filter}) {

    const [active, setActive] = useState("none");
    const [newData, setNewData] = useState([])
    


    return (
    
       <div className="btn__container">
            <button value="1" type="button" className={`country__btn ${active === "first" ? "country__btn__active" : ""}`} onClick={() => {all(); setActive("first")}}>All Stays</button>
            <button value="2" type="button" className={`country__btn ${active === "second" ? "country__btn__active" : ""}`}onClick={() => {filter('Norway'); setActive("second")}}>Norway</button>
            <button value="3" type="button"  className={`country__btn ${active === "third" ? "country__btn__active" : ""}`}onClick={() => {filter('Finland'); setActive("third")}}>Finland</button>
            <button value="4" type="button"  className={`country__btn ${active === "fourth" ? "country__btn__active" : ""}`}onClick={() => {filter('Sweden'); setActive("fourth")}}>Sweden</button>
            <button value="5" type="button"  className={`country__btn ${active === "fifth" ? "country__btn__active" : ""}`}onClick={() => {filter('Switzerland'); setActive("fifth")}}>Switzerland</button>
        </div>
        
       
     
    )
}

export default Buttons;