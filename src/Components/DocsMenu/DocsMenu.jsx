import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './DocsMenu.css'
const CLASSROOM_URL = "https://classroom.google.com/"

const icons = [

    "ACTAS",

    "COMUNICADOS",
    "ESTATUTOS",
    "REGLAMENTO",
    "RESOLUCIONES",
]
const DocsMenu = () => {
    const [active, setActive] = useState("none");
    const history = useHistory()
    const handleSetActive = (icon) => {

        console.log(icon);
        setActive(icon);

        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        modal.classList.remove('disable');
        body.classList.add('modal-open');

    }

    return (
        <div className="documents-view">
            <MenuButton
                {...{
                    icon: "CLASSROOM",
                    addActive: "active",
                    /*  handleSetActive: () => { document.location.href = CLASSROOM_URL }, */
                    handleSetActive: () => {
                        window.open(CLASSROOM_URL,
                            '_blank' // <- This is what makes it open in a new window.
                        )
                    },
                    color: "yellow"
                }}
            />
            <div></div>
            {
                icons.map((icon) => {
                    const addActive = icon === active ? "active" : "";
                    return (
                        <MenuButton
                            {...{ icon, addActive, handleSetActive }}
                        />
                    )
                })
            }
        </div>
    )
}

const MenuButton = (props) => {
    const { icon, addActive, handleSetActive, color } = props;
    return (
        <div
            key={icon}
            className={`box ${addActive}`}

            onClick={() => handleSetActive(icon)}>
            <div className={`icon ${color}`}>
                <img
                    src={`${process.env.PUBLIC_URL}/documentos/${icon}.svg`} alt="Jugger Colombia Logo"
                />
            </div>
            <div className="content">
                <h4>{`${icon}`}</h4>
            </div>
        </div>
    )
}
MenuButton.defaultProps = {
    color: "",
    icon: "REGLAMENTO",
    addActive: true,
    handleSetActive: () => console.log("no set")
}
export default DocsMenu;