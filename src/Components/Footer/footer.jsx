import React from 'react';
import logo from "../jugger_logo.svg"
import "./footer.css";

const  Footer = () =>{
    return (
        <section>
            <div className="down-index">
                <section > 
                    <a href="#test" className="icon"><i class="flaticon-001-facebook"></i> @Juggercolombia</a>
                    <a href="#test"  className="icon"><i class="flaticon-002-twitter"></i>@Juggercolombia</a>
                    <a href="#test"  className="icon"><i class="flaticon-011-instagram"></i> @Jugger.co</a>
                </section>
                <section>
                    <h5 >FAQ</h5>
                    <h5 >Reglamento & Otros Documentos </h5>
                    <h5 >Politicas de Privacidad</h5>
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


/**
 * 
 *  <section class="header-icons-container">

        <div class="icons">
            <a href="#test"><span class="flaticon-001-facebook"></span></a>
            <a href="#test"><span class="flaticon-002-twitter"></span></a>
            <a href="#test"><span class="flaticon-011-instagram"></span></a>
            <a href="#test"><span class="flaticon-008-youtube"></span></a>
            <a href="#test"><span class="flaticon-010-linkedin"></span></a>
            
            <a href="#test"><i class="flaticon-001-facebook"></i></a>
            <a href="#test"><i class="flaticon-002-twitter"></i></a>
            <a href="#test"><i class="flaticon-011-instagram"></i></a>
            <a href="#test"><i class="flaticon-008-youtube"></i></a>
        </div>
    </section>
 * 
 * 
 * 
 */