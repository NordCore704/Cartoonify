import React from "react";
import spaceImage from "../images/cartoon.png";
import gsap, { Power4 } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = ({timeline}) => {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(() => {
    let element = ref.current
    timeline.to(element.querySelector('.hero--sketch'),{
        opacity: 1,
        duration: 1,
        x: 0,
        delay: 4,
        transition: Power4.easeInOut,
        ease: 'ease-in',
        scrollTrigger: {
            trigger: element.querySelector('.hero--sketch'),
            top: 'top 90%', 
            end: 'bottom 60%',
            toggleActions: 'restart complete reverse reset',               
            scrub: true,
        }
    }, "-=.5")
}, [])
  return (
    <section className="hero--main" ref={ref}>
      <img src={spaceImage} alt="" className="hero--sketch" />
      <div className="hero--text-div">
        <h2 className="hero--heading">Make Awesome Sketches</h2>
        <p className="hero--text">
          Our sketcher lets you put all your ideas into one to many sketches,
          create cartoonized art purely from your imgaination with Cartoonify Sketch.
        </p>
      </div>
    </section>
  );
};

export default Hero;
