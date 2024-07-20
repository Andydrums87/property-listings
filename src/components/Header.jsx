import React from "react";
import Image from "../images/hero-image.jpg"


function Header () {
    return (
        <div className="header__container">
            <div className="header__info">
                <h1 id="header__title">Peace, nature, <br /> dream</h1>
                <p id="header__para">Find and book a great experience</p>
                <p></p>
            </div>
         <img className="hero__img"src={Image} alt="Hero Image" />
        </div>
    )
}

export default Header;
