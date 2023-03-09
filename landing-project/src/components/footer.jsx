import React from "react";
import logo from '../images/space-man.png'

const Footer = () => {
    return (
        <>
        <footer className="foot">
            <div className="hr-line"></div>
            <div className="logo--foot-div">
                <img src={logo} alt="" className="logo--foot" />
                <p>Cartoonify</p>
            </div>
            <div className="foot-options">
                <div className="products--foot">
                <h3>Products</h3>
                <a href="">Toonie</a>
                <a href="">Sketcher</a>
                </div>
                <div className="pricing--foot">
                    <h3>Pricing</h3>
                    <a href="">Free Tier</a>
                    <a>Single Tier</a>
                    <a>Group Tier</a>
                </div>
                <div className="about--foot">
                    <h3>About Us</h3>
                    <p>Just a group of individuals serving AI to the world, cartoonised🤖</p>
                </div>
            </div>
        </footer>
        </>
    )
}


export default Footer