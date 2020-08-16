import React from "react";
import "./banner.css"
const Banner = () =>{
    return(
        <section className="banner">
            <img src={`${process.env.PUBLIC_URL }/BANNER_WEB-HOME_JUGGER.jpg`} alt=""/>
            <p class="tag">COLOMBIA</p>
        </section>
    )
}

export default Banner;