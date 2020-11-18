import React, { useState } from 'react';
import './DocsMenu.css'
const icons = [
    "ACTAS",
    "CLASSROOM",
    "COMUNICADOS",
    "ESTATUTOS",
    "REGLAMENTO",
    "RESOLUCIONES",
]
const DocsMenu = () => {
    const [active, setActive] = useState("none");

    const handleSetActive = (icon) => {

        console.log(icon);
        setActive(icon);
    }

    return (
        <div className="documents-view">

            {
                icons.map((icon) => {
                    const addActive = icon === active ? "active" : "";
                    return (
                        <div
                            key={icon}
                            className={`box ${addActive}`}

                            onClick={() => handleSetActive(icon)}>
                            <div className="icon">
                                <img
                                    src={`${process.env.PUBLIC_URL}/documentos/${icon}.svg`} alt="Jugger Colombia Logo"
                                />
                            </div>
                            <div className="content">
                                <h4>{`${icon}`}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DocsMenu;