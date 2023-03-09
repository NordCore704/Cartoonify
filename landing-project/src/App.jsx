import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import { useEffect, useState, useRef } from "react";
import Intro from '../src/components/intro-section'
import HeroSection from '../src/components/hero'
import About from '../src/components/about'
import Main from '../src/components/main'
import Footer from '../src/components/footer'
import { gsap, Power4, } from "gsap";

import Transition from './transitions/transition'


const App = () => {
    let timeline = gsap.timeline()
    return ( 
        <div className="App">
            
            <Intro />
            <HeroSection timeline={timeline}/>
            <About />
            <Main timeline={timeline} />
            <Footer />
        </div>
    )
}



export default App