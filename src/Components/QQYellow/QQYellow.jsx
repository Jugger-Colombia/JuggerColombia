import React,{useEffect, useRef} from 'react';
import INFO from './data';
import './QQYellow.css'
import './card.css';
import { useState } from 'react';


const QQYellow = () =>{
    const ref = useRef();
    const output = useOnScreen(ref,{threshold: 0.35});


    const QueEsJugger = INFO['jugger'].map(i => <p key={`jugger${i}`}>{i}</p>);
    const QueEsJuggerColombia= INFO['juggerColombia'].map(i => <p  key={`juggerColombia${i}`}>{i}</p>);
    
    useEffect(() =>{
        console.log({ref,output});
    },[ref, output])
    return(
        <section ref={ref} className="stickyContainer">
            <div className="sticky">
                <div className="text-container">
                    <div className="text-right">
                        {QueEsJugger}
                    </div>
                    <div className="text-left">
                        {QueEsJuggerColombia}
                    </div>
                </div>
                <div className="card-content">
                    <Card /> 
                </div>
            </div>
        </section>
    )
}

const Card = (props) =>{
    const {cardPlace = ""} = props
    const bg1 = `url(${process.env.PUBLIC_URL }/frontPage/Yellow_1_FLT.png)`;
    const bg2 = `url(${process.env.PUBLIC_URL }/frontPage/Yellow_2_FLT.png)`;


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

function useOnScreen (ref,options){
    const [visible, setVisible] = useState(false);
   
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                console.log(entry.intersectionRatio);
                setVisible(entry.isIntersecting);
            }, options
        );
        
        if(ref.current){
            observer.observe(ref.current);
        }

        return () =>{
            if(ref.current){
                observer.unobserve(ref.current);
            }
        }
    },[])

    return  {ref, visible}
}

export default QQYellow;