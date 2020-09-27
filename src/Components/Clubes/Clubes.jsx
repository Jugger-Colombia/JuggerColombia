import React, { useState } from 'react';
import Modal from '../REGULARS/Modal/Modal';
import ClubessModalGallery from './ModalGallery/ModalGallery';

import CLUBES from './data';


import './Clubes.css';
import './diamond-gallery.css';

const Clubes = () => {
    const [selectedClub, setSelectedClub] = useState(0);


    return (
        <section className='clubes'>
            <h1 className='heading-clubes'>Clubes Activos</h1>

            <div className="diamond-grid">
                {tumbItems()}
            </div>

            <Modal>
                <ClubessModalGallery />
            </Modal>
        </section>
    )
}
const positions = [
    { col: 1, row: 1 },
    { col: 3, row: 1 },
    { col: 5, row: 1 },
    { col: 2, row: 2 },
    { col: 4, row: 2 },
    /*{col:7 ,row:1},
    {col:6 ,row:2},
    {col: 3,row:3},
    {col: 1,row:3},
    {col: 5,row:3},
    {col: 7,row:3}, */
]
const tumbItems = () => {
    const handleClick = (e, name) => {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        modal.classList.remove('disable');
        body.classList.add('modal-open');

        console.log(e.target, name);
    }
    const tumbItems = CLUBES.map((club, i) => {

        return (
            <div
                className="item-shadow"
                onClick={e => handleClick(e, { name: club.name, i })}
                style={{ "--row": positions[i].row, "--col": positions[i].col }}
                key={`${club.name}${i}`}
            >
                <div className="diamond-item" >
                    {/*  {club.name} */}
                    <img
                        className="diamond-item-logo"
                        src={club.logo} alt=""
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