import React, {  useEffect } from "react";
import logo from "../jugger_logo.svg"

const NAVS = {
    nosotros: "#nosotros" ,
    clubes: "#clubes" ,
    entrenamientos: "#entrenamientos" ,
    eventos: "#eventos" ,
    contacto: "#contacto" ,
} 


const NavBar = () =>{

    var navs = Object.keys(NAVS);
    var navs_list = navs.map(
        (i)=> ( <NavBarItem name={i}  key={i}/>)
    )

    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            var nav = document.querySelector("nav");
            nav.classList.toggle("sticky", window.scrollY > 0);
            console.log(window.scrollY);
        })
    },[])

    return(
        <header className="App-header">
            <nav>
                <div className="jugger_logo">
                    <figure >
                        <img  src={logo} alt="Jugger Colombia Logo"/>
                    </figure>
                    <a href="#test" className="logo">Jugger Colombia</a>
                </div>
                <NavBarItemsList >
                    {navs_list}
                </NavBarItemsList>
            </nav>    
        </header>
    )
}

const NavBarItemsList  = (props) =>{
    
    return (
        <ul>
            {props.children}
        </ul>
    )
}

const NavBarItem = (props) => {

    return (
        <li> <a href={`#${props.name}`}> {props.name}</a></li>
    )
}


NavBarItem.defaultProps = {
    name: "HOLI"   
}
export default NavBar;