import React from 'react'
import { useEffect, useRef } from "react";
import { Power4 } from "gsap";


const TransitionProducts = ({timeline}) => {
    let trans = useRef(null)
    useEffect(() => {
        timeline.to(trans.current, {
            duration: 3,
            x: -2500,
            ease: Power4.easeInOut,
            display: 'none'
        }); 
    })
    return (
        <>
        <div className="transition-effect-products" ref={trans}>

        </div>
        </>
    )
}

export default TransitionProducts