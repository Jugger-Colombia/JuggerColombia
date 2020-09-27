import React from 'react';
import './modal-gallery.css';

const Modal = (props) => {
    const handleCloseModal = () => {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        modal.classList.add('disable');
        body.classList.remove('modal-open');
    }
    return (
        <div
            className="modal "
            /* className="modal disable" */
            onClick={() => handleCloseModal()}
        >
            {props.children}
        </div>
    )
}

export default Modal;
