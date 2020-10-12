import React, { useState, useEffect } from 'react';
import Modal from '../REGULARS/Modal/Modal';
import ClubessModalGallery from './ModalGallery/ModalGallery';

import { CLUBES, access } from './data';


import './Clubes.css';
import './diamond-gallery.css';

const Clubes = () => {
    const [selectedClub, setSelectedClub] = useState("lycaon");

    useEffect(() => {
        const diamondItems = document.querySelectorAll('.diamond-item');
        diamondItems.forEach((item) => {
            console.log(item);
            item.addEventListener("mouseenter", (event) => {
                console.log("enter");
            });
        })
    }, [])
    return (
        <section
            id="clubes"
            className='clubes'
        >
            <h1 className='heading-clubes'>Clubes Activos</h1>

            <div className="diamond-grid">
                {tumbItems({ selectedClub, setSelectedClub })}
            </div>

            <Modal>
                <ClubessModalGallery {...{ selectedClub, setSelectedClub }} />
            </Modal>
        </section>
    )
}
const positions = [
    /* { col: 1, row: 1 },
    { col: 3, row: 1 },
    { col: 5, row: 1 }, */
    { col: 2, row: 2 },
    { col: 4, row: 2 },
    /*{col:7 ,row:1},
            {col:6 ,row:2},
            {col: 3,row:3},
            {col: 1,row:3},
            {col: 5,row:3},
            {col: 7,row:3}, */
]
const tumbItems = ({ selectedClub, setSelectedClub }) => {

    const handleClick = (e, clubObj) => {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        modal.classList.remove('disable');
        body.classList.add('modal-open');
        setSelectedClub(clubObj.club)
        console.log(e.target, clubObj);
    }


    /* const tumbItems = Object.keys(CLUBES).map((club, i) => { */
    const tumbItems = access.map((club, i) => {
        const { name, logo } = CLUBES[club];
        return (
            <div
                className="item-shadow"
                onClick={e => handleClick(e, { name: name, club })}
                style={{ "--row": positions[i].row, "--col": positions[i].col }}
                key={`${name}${i}`}
            >
                <div className="diamond-item" >
                    {/*  {club.name} */}
                    <img
                        className="diamond-item-logo"
                        src={logo} alt=""
                    />
                </div>
            </div>
        )
    })

    return (
        tumbItems
    )
}


export default Clubes;