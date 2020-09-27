import React, { useState } from 'react';

import CLUBES from '../data';

import './clubes-modal-gallery.css'


function ClubsModalGallery(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const handleClick = (e, name) => {
        console.log(e.target, name);
    }

    const slides = CLUBES.map((club, i) => {
        return (
            <img key={`${club.name}${i}`} className={"club-card"} src={club.logo} alt="" />
        )
    })

    const card = (index) => {
        const { name, logo, description, responsable, email, contact, socialmedia } = CLUBES[index];
        const iconsSocial = socialmedia.map((social, i) => iconPicker(social.type))

        return (
            <section className="gallery-main-card">
                <img className={"main-card"} src={logo} alt="" />
                <div className="card-content">
                    <h1 className={"tittle"}> {name}</h1>
                    <p>{description}</p>
                    <h3><span>{"Responsable :"}</span> {responsable}</h3>
                    <h3><span>{"email :"}</span> {email}</h3>
                    <h3><span>{"contac :"}</span> {contact}</h3>
                    <div className="social-content">
                        {iconsSocial}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <div className="clubes-modal-gallery">
            {card(0)}
            <div className="gallery-controls">
                <h3>◀</h3>
                <h1>CLUB</h1>
                <h3>▶</h3>
            </div>
            <div className="gallery-tumb-line">
                <div className="gallery-tumb-line-logos">
                    {slides}
                </div>
            </div>
        </div>
    )
}

const iconPicker = (type) => {
    const icons = {
        facebook: <a className={"icon"} href="#test" > <i className="flaticon-001-facebook"></i></a >,
        twitter: <a className={"icon"} href="#test"><i className="flaticon-002-twitter"></i></a>,
        instagram: <a className={"icon"} href="#test"><i className="flaticon-011-instagram"></i></a>,
        youtube: <a className={"icon"} href="#test"><i className="flaticon-008-youtube"></i></a>,
        linkedin: <a className={"icon"} href="#test"><i className="flaticon-010-linkedin"></i></a>,
        whatsapp: <a className={"icon"} href="#test"><i className="flaticon-003-whatsapp"></i></a>,
    }
    return icons[type];
}

export default ClubsModalGallery;