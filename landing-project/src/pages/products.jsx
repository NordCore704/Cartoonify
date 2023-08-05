import React from "react";
import { useState, useRef, useEffect } from "react";
import Bot from "../images/bot.png";
import Sketch from "../images/sketch.svg";
import smallToon from "../images/chatbot.png";
import Toonie from "../images/toonie-3d.png";
import sketchBook from "../images/sketchbook-3d.png";
import { gsap, Power3 } from "gsap";
import Typewriter from "typewriter-effect";
import TransitionProducts from "../transitions/transition-products";

const Products = () => {
  const [showProducts, setShowProducts] = useState(true);
  let bodyRef = useRef(null);
  let cartoonImageRef = useRef(null);
  let sketchImageRef = useRef(null);
  let timeline = gsap.timeline();

  useEffect(() => {
    gsap.to (bodyRef, {
        visibility: "visible",
        duration: 0.5,
        transition: Power3.easeInOut,
    });
    gsap.to(cartoonImageRef, {
      duration: 1,
      opacity: 2,
      y: -30,
      x: 3,
      transition: Power3.easeInOut,
      delay: 1.2,
    });
  });

  const showToonie = () => {
      setShowProducts(false)
      gsap.to(sketchImageRef, {
        duration: 1,
        opacity: 2,
        x: 40,
        x: 3,
        transition: Power3.easeInOut,
        delay: 1.2,
      });
  }
  return (
    <div className="products" ref={(item) => (bodyRef = item)}>
      <TransitionProducts timeline={timeline} />
      <div className="products--nav">
        <button onClick={() => setShowProducts(true)} className="toonie--btn">
          <img src={Bot} alt="toonie-icon" className="toonie--nav-icon" />
        </button>
        <button onClick={showProducts ? showToonie : ''} className="sketch--btn">
          <img
            src={Sketch}
            alt="sketchbook-icon"
            className="sketch--nav-icon"
          />
        </button>
      </div>
      {showProducts ? (
        <>
          <div className="toonie--info">
            <div className="toonie--img-div">
              <img
                src={Toonie}
                alt="toonie"
                className="toonie--img"
                ref={(image) => (cartoonImageRef = image)}
              />
            </div>

            <div className="toonie--text">
              <p className="explore">Sketch Better with Toonie</p>
              <div className="description">
                {" "}
                <Typewriter
                  className="description"
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Toonie says hello!🤖")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        `Introducing toonie, our specially made AI assistant that will
                help you enhance your sketches, in any sketch style, and also
                give out creative suggestions to expand your horizon of
                ideas(the sky is the limit, literally). Ask Toonie anything
                about art! There's a lot you'll discover, Paid tier comes with
                extra features.`
                      )
                      .start();
                  }}
                />
              </div>
              <div className="get-started-div">
                <img src={smallToon} alt="toonie-img" className="toonie-chat" />
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="sketch--info">
            <div className="sketch--img-div">
              <img
                src={sketchBook}
                alt="sketch-img"
                className="sketch--img"
                ref={(el) => (sketchImageRef = el)}
              />
            </div>
            <div className="sketch--text">
              <p className="explore--sketch"><span className="title-word title-word-1">Explore</span> <span className="title-word title-word-2">Our</span> <span className="title-word title-word-3">Sketchbook</span></p>
              <p className="sketch-description">
                The sketchbook is a Graphical Interface that let's you bring
                your imaginations to life! You can put anything in the
                sketchbook(so long as it can be pictured), we have also injected
                toonie's assistance into our sketchbook so you can have precise
                sketching whether free hand or grid sketches, all types of art is
                possible in the sketchbook, ranging from doodling to paintings,
                abstsract, sketches or even mapping.
              </p>
              <button className="sketch-start--btn">Start Now!</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
