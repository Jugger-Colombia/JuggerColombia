import React from 'react';
import INFO from './data';
import './QQYellow.css'



const QQYellow = () =>{
    const QueEsJugger = INFO['jugger'].map(i => <p>{i}</p>);
    const QueEsJuggerColombia= INFO['juggerColombia'].map(i => <p>{i}</p>);
    
    return(
        <section className="yellowSection">
            <div className="text-container">
                <div>
                    {QueEsJugger}
                </div>
            </div>
            <div className="text-container">
                <div>
                    {QueEsJuggerColombia}
                </div>
            </div>
        </section>
    )
}


export default QQYellow;