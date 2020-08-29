import React,{useEffect, useRef} from 'react';
import INFO from './data';
import './QQYellow.css'
import './card.css';
import { useState } from 'react';


const QQYellow = () =>{
    const [ref,setRef] = useState(null);
    const [cardPlace, setCardPlace] = useState('');
    const output = useOnScreen(ref,{ rootMargin: '30%'});

    const QueEsJugger = INFO['jugger'].map(i => <p key={`jugger${i}`}>{i}</p>);
    const QueEsJuggerColombia= INFO['juggerColombia'].map(i => <p  key={`juggerColombia${i}`}>{i}</p>);
    
    useEffect(() =>{
        const {ref, visible ,threshold} = output ;/**Trigger */ 
        if (ref){
            console.log(ref.scrollHeight||null);
        }
        if (visible){ 
            setCardPlace('right')
        }else{
            setCardPlace('')
        }
        console.log({...output});
    },[ref,output])

    return(
        <section ref={setRef} className="stickyContainer">
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
                    <Card cardPlace={cardPlace}/> 
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
    const [threshold, setThreshold] = useState(0);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                setVisible(entry.isIntersecting);
                setThreshold(entry.intersectionRatio);
            }, options
        );
        
        if(ref){
            observer.observe(ref);
        }

        return () =>{
            if(ref){
                observer.unobserve(ref);
            }
        }
    },[])

    return  {ref, visible ,threshold}
}

export default QQYellow;