import React from 'react';
import INFO from './data';
import './QQYellow.css'
import './card.css';


const QQYellow = () =>{
    const QueEsJugger = INFO['jugger'].map(i => <p key={`jugger${i}`}>{i}</p>);
    const QueEsJuggerColombia= INFO['juggerColombia'].map(i => <p  key={`juggerColombia${i}`}>{i}</p>);
    
    return(
        <section className="yellowSection">
           
            <div className="text-container">
                <div className="text">
                    {QueEsJugger}
                </div>
            </div>
            <div className="text-container">
                <div className="text right_text">
                    {QueEsJuggerColombia}
                </div>
            </div>
            
            <figure className="img_right">
                <img src={`${process.env.PUBLIC_URL }/frontPage/Yellow_1.png`} alt=""/>
            </figure>

            <figure className="img_left">
                <img src={`${process.env.PUBLIC_URL }/frontPage/Yellow_2.png`} alt=""/>
            </figure>

            <Card  cardPlace='leftCard'/>
            <Card  cardPlace='rightCard'/>
        </section>
    )
}

const Card = (props) =>{
    const {cardPlace = ""} = props
    const bg1 = `url(${process.env.PUBLIC_URL }/frontPage/Yellow_1_FLT.png)`;
    const bg2 = `url(${process.env.PUBLIC_URL }/frontPage/Yellow_2_FLT.png)`;
    console.log(props);
    return(
        <div className={`card ${cardPlace}`}>
            <div className="face front" style= {{background: bg1, backgroundSize: 'cover'}}>
                <h2>Que es Jugger ?</h2>
            </div>
            <div className="face back" style= {{background: bg2, backgroundSize: 'cover'}}>
                <h2>Que es Jugger Colombia ?</h2>
            </div>
        </div>
    )
}


export default QQYellow;