import React, { useState } from 'react';

import { CLUBES, access } from '../data';

import './clubes-modal-gallery.css'


function ClubsModalGallery(props) {
    const { selectedClub, setSelectedClub } = props;
    const handleClick = (e, name) => {
        setSelectedClub(name)
    }

    /* const slides = Object.keys(CLUBES).map((club, i) => { */
    const slides = access.map((club, i) => {
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
        const iconsSocial = socialmedia.map((social, i) => iconPicker({ ...social, i }));

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
                        <h3 ><span>{"contac :"}</span> {contact} </h3>
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

            <div className="gallery-controls">
                <h3>{/* ◀ */}</h3>
                <h1>{CLUBES[selectedClub].name}</h1>
                <h3>{/* ▶ */}</h3>
            </div>
            <div className="gallery-tumb-line">
                <div className="gallery-tumb-line-logos">
                    {slides}
                </div>
            </div>
        </div>
    )
}


const iconsClass = {
    facebook: "flaticon-001-facebook",
    twitter: "flaticon-002-twitter",
    instagram: "flaticon-011-instagram",
    youtube: "flaticon-008-youtube",
    linkedin: "flaticon-010-linkedin",
    whatsapp: "flaticon-003-whatsapp"
}

const iconPicker = (config) => {
    const { type, i, contact } = config;
    const component = <a key={`icon-${i}`} className={"icon"} href={contact} > <i className={iconsClass[type]}></i></a >
    return component;
}



export default ClubsModalGallery;