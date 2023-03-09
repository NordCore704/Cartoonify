import React from "react";
import cartoonSpace from '../images/sketch.jpg';
import gsap, { Power3} from 'gsap'
import { useEffect, useRef } from "react";
import Transition from "../transitions/transition";
const Intro = () => {
    let cartoonImg = useRef(null)
    let textItem = useRef(null)
    let main = useRef(null)
    let timeline = gsap.timeline()

    useEffect(() => {
        gsap.to(main, {visibility: 'visible', duration: 1}, )
        gsap.to(cartoonImg, {duration: .8, opacity: 1.5, y:-20, ease: Power3.easeInOut, delay: 1, },)
        gsap.to(textItem, {opacity: 1, y:-20, ease: Power3.easeInOut, duration: .8, delay: 1.2, })
    }, [])
    return (
        <div className="intro--main-div" ref={item => (main = item)}>
            <Transition timeline={timeline} />
            <div className="intro--text-div" ref={item => (textItem = item)}>
                <h1 className="intro--heading">Cartoon Yourself, and everything</h1>
                <p className="intro--text">
                    A new approach to how you could view the world around you! Cartoon anything and everything with cartoonify.
                </p>
            </div>
            <img src={cartoonSpace} alt="" className="intro-cartoon"  ref={item => (cartoonImg = item)}/>
        </div>
    )
}


export default Intro