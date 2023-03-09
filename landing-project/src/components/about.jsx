import React from "react";
import hoodie from '../images/icons8-hoodie-64.png'

const About = () => {
    return (
        <section id="About" className="About">
            <div className="About--div">
                <img src={hoodie} alt="" className="hoodie" />
                <h2 className="about-heading">Creation Of The Cartoon Thing</h2>
                <p className="about-text">Cartoonify was created in December 2022 by a group of developers who have had visions of a cartoonised reality where everything is possible, a reality where anyone's imagination can be made manifest with the use of AI.</p>
            </div>
            <button className="learn-more">Learn More</button>
        </section>
    )
} 



export default About