import React, { useState } from 'react';

import CLUBES from '../data';

import './clubes-modal-gallery.css'


function ClubsModalGallery(props) {
    const { selectedClub, setSelectedClub } = props;

    const handleClick = (e, name) => {
        console.log(e.target, name);
        setSelectedClub(name)
    }

    const slides = Object.keys(CLUBES).map((club, i) => {
        const { name, logo } = CLUBES[club];
        return (
            <img
                onClick={(e) => handleClick(e, club)}
                key={`${name}${i}`}
                className={"club-card"}
                src={logo} alt=""
            />

        )
    })

    const card = (club) => {
        const { name, type, logo, description, responsable, email, contact, socialmedia } = CLUBES[club];
        const iconsSocial = socialmedia.map((social, i) => iconPicker(social.type))

        return (
            <section className="gallery-main-card">
                <img className={"main-card"} src={logo} alt="" />
                <div className="card-content">
                    <div className="tittle">
                        <h1 className="tittle-name">  {name}</h1>
                        <h3 className="tittle-info">  {type}</h3>
                    </div>
                    <p>{description}</p>
                    <div className="contact">
                        <h3 ><span>{"Responsable :"}</span> {responsable}</h3>
                        <h3 ><span>{"email :"}</span> {email}</h3>
                        <h3 ><span>{"contac :"}</span> {contact}</h3>
                    </div>

                </div>
                <div className="social-content">
                    {iconsSocial}
                </div>
            </section>
        )
    }

    return (
        <div className="clubes-modal-gallery">
            {card(selectedClub)}
            {/*  {card(Object.keys(CLUBES)[1])} */}
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
        facebook: <a key={"icon-1"} className={"icon"} href="#test" > <i className="flaticon-001-facebook"></i></a >,
        twitter: <a key={"icon-2"} className={"icon"} href="#test"><i className="flaticon-002-twitter"></i></a>,
        instagram: <a key={"icon-3"} className={"icon"} href="#test"><i className="flaticon-011-instagram"></i></a>,
        youtube: <a key={"icon-4"} className={"icon"} href="#test"><i className="flaticon-008-youtube"></i></a>,
        linkedin: <a key={"icon-5"} className={"icon"} href="#test"><i className="flaticon-010-linkedin"></i></a>,
        whatsapp: <a key={"icon-6"} className={"icon"} href="#test"><i className="flaticon-003-whatsapp"></i></a>,
    }
    return icons[type];
}

export default ClubsModalGallery;