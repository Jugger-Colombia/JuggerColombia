import React from "react";

const Banner = () =>{
    return(
        <section className="banner">
            <img src={`${process.env.PUBLIC_URL }/BANNER_WEB-HOME_JUGGER.jpg`} alt=""/>
        </section>
    )
}

export default Banner;