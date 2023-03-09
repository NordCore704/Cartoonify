import React from 'react'
import { useEffect, useRef } from "react";
import { Power4 } from "gsap";


const TransitionContact = ({timeline}) => {
    let trans = useRef(null)
    useEffect(() => {
        timeline.to(trans.current, {
            duration: 2.5,
            x: -2500,
            ease: Power4.easeInOut,
            display: 'none'
        }); 
    })
    return (
        <>
        <div className="transition-effect-contact" ref={trans}>

        </div>
        </>
    )
}

export default TransitionContact