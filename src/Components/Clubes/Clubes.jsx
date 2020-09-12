import React from 'react';
import CLUBES from './data';
import logo from "../jugger_logo.svg";

import './Clubes.css';
import './modal-gallery.css';
import './diamond-gallery.css';

const Clubes = ()=>{
    return(
        <section className='clubes'> 
            <h1 className='heading-clubes'>Clubes Activos</h1>
            
            <div className="diamond-grid">
                {tumbItems()}
            </div>

            <Modal> 
                <ClubsGallery></ClubsGallery>
            </Modal>
        </section>
    )
}
const positions = [
    {col:1 ,row: 1},
    {col:3 ,row: 1},
    {col:5 ,row:1},
    {col:2 ,row: 2},
     {col: 4,row:2},
    /*{col:7 ,row:1},
    {col:6 ,row:2},
    {col: 3,row:3},
    {col: 1,row:3},
    {col: 5,row:3},
    {col: 7,row:3}, */
]
const tumbItems =()=>{
    const handleClick = (e,name) =>{
        const body =document.querySelector('body');
        const modal =document.querySelector('.modal');
        modal.classList.remove('disable');
        body.classList.add('modal-open');

        console.log(e.target,name);
    }
    const tumbItems = CLUBES.map( (club ,i) =>{
            return (
                <div  onClick={e => handleClick(e,club.name)} className="item-shadow" style={{"--row": positions[i].row,"--col": positions[i].col} } key={`${club.name}${i}`}>
                    <div  className="diamond-item" >
                    {/*  {club.name} */}
                        <img className="diamond-item-logo" src={club.logo} alt=""/>
                    </div>
                </div>
            )
        }
    )
    
    return(
        tumbItems
    )
}

const Modal = (props)=>{
    const handleCloseModal = () =>{
        const body =document.querySelector('body');
        const modal =document.querySelector('.modal');
        modal.classList.add('disable');
        body.classList.remove('modal-open');
    }
    return(
        <div className="modal disable" onClick={() => handleCloseModal()}>
            {props.children}
        </div>
    )
}

const ClubsGallery = (props) =>{
    return(
        <div className="clubes-modal-gallery">
            <div className="clubCard">

                
            </div>
            <div className="gallery-tumb-line">
                <div className="controlls">

                </div>
                <div className="gallery-tumb-line-logos">
                    {/*  {tumbItems()} */}
                </div>
            </div>
        </div>
    )
}

export default Clubes;