import React,{useEffect, useRef,useState} from 'react';
import INFO from './data';

import './QQYellow.css'
import './card.css';





const QQYellow = () =>{
    const ref = useRef();

    const [cardPlace, setCardPlace] = useState('left');
    const [lock,setLock] = useState(false);
    const output = useOnScreen(ref,{ rootMargin: "-20%"});

    const QueEsJugger = INFO['jugger'].map(i => <p key={`jugger${i}`}>{i}</p>);
    const QueEsJuggerColombia= INFO['juggerColombia'].map(i => <p  key={`juggerColombia${i}`}>{i}</p>);
   

    useEffect(() =>{
        const { visible} = output;
        if(visible){
            if(!lock){
                setCardPlace(cardPlace==='left'?'right':'left')
                setLock(true);
            }
        }else{
            setLock(false)
        }
    },[ref,output,cardPlace,lock])


    return(
        <section className="stickyContainer" >
            <div className="sticky">
                <div className={`text-container ${cardPlace}`} >
                    <div className="text text-right">
                        {QueEsJugger}
                    </div>
                    <div className="text text-left">
                        {QueEsJuggerColombia}
                    </div>
                </div>
                <div className="card-content">
                    <Card cardPlace={cardPlace}/> 
                </div>
            </div>
            <span ref={ref}></span>

        </section>
    )
}

const Card = (props) =>{
    const {cardPlace = ""} = props
    const bg1 = `url(${process.env.PUBLIC_URL }/frontPage/YELLOW1FLT.png)`;
    const bg2 = `url(${process.env.PUBLIC_URL }/frontPage/YELLOW2FLT.png)`;


    return(
        <div className={`card ${cardPlace}`}>
            <div className="face front" style= {{background: bg1, backgroundSize: 'cover'}}>
                <h2>¿ Que es Jugger ?</h2>
            </div>
            <div className="face back" style= {{background: bg2, backgroundSize: 'cover'}}>
                <h2>¿ Que es Jugger Colombia ?</h2>
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
        
        if(ref.current){
            observer.observe(ref.current);
        }
       /*  return () =>{
            if(ref.current){
                observer.unobserve(ref.current);
            }
        } */
    },[ref,options])

    return  {ref, visible ,threshold}
}

export default QQYellow;