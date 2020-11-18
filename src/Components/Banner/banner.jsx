import React from "react";
import "./banner.css"
const RedBanner = () => {
    return (
        <section id="banner" className="banner">
            <img src={`${process.env.PUBLIC_URL}/frontPage/REDBANNER.jpg`} alt="" />
            <p className="tag">COLOMBIA</p>
        </section>
    )
}


export const BlueBanner = () => {
    return (
        <section id="banner" className="blue-banner">
            <img
                src={`${process.env.PUBLIC_URL}/documentos/BLUEBANNER.jpg`}
                alt="" />
        </section>
    )
}


export default RedBanner;