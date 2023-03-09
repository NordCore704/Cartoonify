import React from "react";
import Twitter from "../images/twitter.png";
import Sitter from "../images/sitter.png";
import Teen from "../images/teenager.png";
import Mail from "../images/email.png";
import { useRef, useEffect } from "react";
import TransitionContact from "../transitions/transition-contact";
import { gsap, Power3 } from "gsap";

const Contact = () => {
  let timeline = gsap.timeline();
  let bodyRef = useRef(null);
  let firstDivRef = useRef(null);
  let twitterRef = useRef(null);
  let mailRef = useRef(null)
  let creatorRef = useRef(null)

  useEffect(() => {
    gsap.to(bodyRef, {
      visibility: "visible",
      duration: 1.5,
    });
    gsap.to(firstDivRef, {
      y: 0,
      opacity: 1,
      duration: 1.8,
      ease: "ease-in",
      transition: Power3.easeInOut,
    });
    gsap.to(twitterRef, {
        x: 0,
        opacity: 1,
        ease: 'ease-in',
        duration: 2,
        transition: Power3.easeInOut,
        overflow: 'hidden',
    }, '-=.5');
    gsap.to(mailRef, {
        x: 0,
        opacity: 1,
        ease: 'ease-in',
        duration: 2,
        transition: Power3.easeInOut,
        overflow: 'hidden',
    }, '-=.5');
    gsap.to(creatorRef, {
        x: 0,
        opacity: 1,
        ease: 'ease-in-out',
        duration: 2,
        transition: Power3.easeInOut,
    },)
  }, []);
  return (
    <div className="contact--main" ref={(el) => (bodyRef = el)}>
      <TransitionContact timeline={timeline} />
      <div className="first-div" ref={(el) => (firstDivRef = el)}>
        <p>Let's have a talk!</p>
        <img src={Teen} alt="" className="teen" />
      </div>
      <div className="main--contact-div">
        {/* <div className="blob-container">
            <div className="blob"></div>
            <div className="blob2"></div>
        </div> */}
        <div className="twitter--div hover-translate" ref={(el)=> twitterRef = el}>
          <p>Reach out to us</p>
          <img
            src={Twitter}
            alt="twitter"
            className="Twitter hover-translate"
          />
        </div>
        <div className="email--div hover-translate" ref={(el) => mailRef = el}>
          <p>Send in mail!</p>
          <img src={Mail} alt="twitter" className="email hover-translate" />
        </div>
        <div className="creator--div hover-translate" ref={(el) => creatorRef = el}>
          <p>Meeet The Creator</p>
          <img src={Sitter} alt="twitter" className="creator hover-translate" />
          <div className="creator-contact-1">
            <h4>Twitter:</h4>
            <p>@GoofyWithRae</p>
          </div>
          <div className="creator-contact-2">
            <h4>email:</h4>
            <p>petersimon0730@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
