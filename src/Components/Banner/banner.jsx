import React from "react";
import "./banner.css"
const Banner = () =>{
    return(
        <section className="banner">
            <img src={`${process.env.PUBLIC_URL }/frontPage/RED_BANNER.jpg`} alt=""/>
            <p className="tag">COLOMBIA</p>
        </section>
    )
}

export default Banner;