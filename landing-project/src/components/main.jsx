import React from "react";
import { useEffect, useRef } from "react";
import sailboat from '../images/sailboat.png'
import animals from '../images/animals.jpg'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {gsap, Power4, Power3} from "gsap";

const main = ({timeline}) => {
    gsap.registerPlugin(ScrollTrigger)
    let ref = useRef(null)
    useEffect(() => {
        let element = ref.current
        timeline.to(element.querySelector('.main--text-div'),{
            opacity: 1,
            duration: 10,
            y: 0,
            transition: Power3.easeInOut,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: element.querySelector('.main--text-div'),
                top: 'top 90%', 
                end: 'bottom 60%',
                toggleActions: 'restart complete reverse reset',               
                scrub: true,
            }
        }, "-=.5")
    }, [])

    useEffect(() => {
        let element = ref.current
        timeline.to(element.querySelector('.boat--image'),{
            opacity: 1,
            duration: 8,
            delay: 2,
            x: 0,
            transition: Power3.easeInOut,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: element.querySelector('.boat--image'),
                top: 'top 90%', 
                end: 'bottom 60%',
                toggleActions: 'restart complete reverse reset',
                scrub: true,
            }
        }, "-=.5")
    }, [])

    useEffect(() => {
        let element = ref.current
        timeline.to(element.querySelector('.animals-image'),{
            opacity: 1,
            duration: 8,
            delay: 1,
            x: 0,
            transition: Power3.easeInOut,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: element.querySelector('.animals-image'),
                top: 'top 90%', 
                end: 'bottom 60%',
                toggleActions: 'restart complete reverse reset',
                scrub: true,
            }
        }, "-=.5")
    }, [])



    return(
        <main className="main--section" ref={ref}>
            <img src={sailboat} alt="" className="boat--image" />
            <div className="main--text-div">
                <h2 className="main--heading">
                    cartoon nature in itself
                </h2>
                <p className="main--text" >
                    With cartoonify you could just about cartoonise anything, so long as it has a visual representation. Yes! We have incorporated our high end AI, Toonie into cartoonify that takes any image(even sketches) and cartoonise it totally according to your preferences.
                </p>
            </div>
            <img src={animals} alt="" className="animals-image" />
        </main>
    )
}

export default main