import React, { useEffect } from 'react';
import './modal-gallery.css';


const Modal = (props) => {

    const handleCloseModal = (e) => {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');

        if (e.target == modal) {
            modal.classList.add('disable');
            body.classList.remove('modal-open');
            /* console.log(e.target); */
        }
    }
    useEffect(() => {
        window.onclick = (e) => handleCloseModal(e);
    }, [])
    return (
        <div
            /* className="modal " */
            className="modal disable"
        /*  onClick={() => handleCloseModal()} */
        >
            {props.children}
        </div>
    )
}

export default Modal;
