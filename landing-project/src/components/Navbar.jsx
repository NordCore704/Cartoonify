import React from "react";
import hamburger from "../images/icon-hamburger.svg";
import logo from "../images/space-man.png";
import closeburger from "../images/icon-close.svg";
import { useState, useRef, useEffect } from "react";
import Pricing from "../pages/pricing";
import { Link } from "react-router-dom";
import {gsap, Power3 } from "gsap";

const Navbar = () => {
  const [show, setShow] = useState(false);
  let mainNav = useRef(null);
  let navOptions = useRef(null);
  let logoRef = useRef(null);
  let hamRef = useRef(null)

  useEffect(() => {
    gsap.to(logoRef, {
      opacity: 1,
      y: -10,
      duration: 1,
      transition: Power3.easeInOut,
      delay: 1.2,
    });
    gsap.to(
      navOptions,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        transition: Power3.easeInOut,
      },
      "-=.5"
    );
    gsap.to(mainNav, {visibility: 'visible', duration: 1,})
  }, []);

  const changeShow = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <nav className="nav" ref={(el) => mainNav = el}>
      <div className="nav--logo-div" ref={(el) => (logoRef = el)}>
        <img src={logo} alt="" className="nav--logo" />
        <h1 className="header--nav">Cartoonify</h1>
      </div>

      {/* <img src={hamburger} alt="hamburger" className={show ? "close-btn" : 'ham-nav'} onClick={changeShow}/> */}
      {/* <img src={hamburger} alt="hamburger" className={show && "ham-nav"} onClick={changeShow}/> */}

      {show ? (
        <img
          onClick={changeShow}
          src={closeburger}
          className={show && "close-btn"}
          
        />
      ) : (
        <img
          onClick={changeShow}
          src={hamburger}
          className={!show && "ham-nav"}
          ref={(el) => hamRef = el}
        />
      )}
      <div
        className={show ? "nav--options-div-active" : "nav-options-div-none"}
      >
        <ul
          className={show ? "nav--options" : "none"}
          ref={(el) => (navOptions = el)}
        >
          <li>
            <Link to="/" onClick={changeShow}>
              Home
            </Link>
          </li>
          <li>
            <a href="#About" className="">
              About
            </a>
          </li>
          <li>
            <Link to="/products" onClick={changeShow}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={changeShow}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={changeShow}>
              Pricing
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
