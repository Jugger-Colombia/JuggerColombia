import React from 'react';
import logo from "../jugger_logo.svg"

const  Footer = () =>{
    return (
        <section>
            <div className="down-index">
                <section>
                    <h5 >@Juggercolombia</h5>
                    <h5 >@Juggercolombia</h5>
                    <h5 >@Jugger.co</h5>
                </section>
                <section>
                    <h6 >FAQ</h6>
                    <h6 >Reglamento & Otros Documentos </h6>
                    <h6 >Politicas de Privacidad</h6>
                </section>
                <section>
                    <h4 >JUGGER COLOMBIA</h4>
                    <h6 >Dirección: Carrera 52 # 74-22</h6>
                    <h6 >Bogotá D.C - Colombia</h6>
                    <h6 >Teléfonos: 305 3680606 - 305 7128436</h6>
                    <h6 >www.jugger.co - juggercolombia@gmail.com </h6>
                </section>
                <section>
                    <div className="jugger_logo">
                        <figure >
                            <img  src={logo} alt="Jugger Colombia Logo"/>
                        </figure>
                    </div>
                </section>

            </div>
            <h5 className="rights">
               {"Jugger Colombia 2020 - Todos los derechos reservados / Sitio diseñador por: MajoAlvarez-Diseño y desarrollado por: Marca de Moggy"}
            </h5>
        </section>
    )
}

export default Footer;