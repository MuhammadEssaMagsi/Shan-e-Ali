import React from 'react';
import { Link } from "react-router-dom";
import './Hero.css';
import hero from '../images/character.jpg';

function Hero() {
    return(
        <section className="hero-section section">
        <div className="hero-content">
            <h1 className="hero-title">
                Professional <br/>
                <hr/>
                Video Editor
            </h1>
            <p>Making Your Videos Look More Cool</p>
            <Link to="/contact"><button>LETS TALK</button></Link>
        </div>
        <div className="hero-character">
            <img src={hero} alt="Character" loading='lazy'/>
        </div>
    </section>
    );
}

export default Hero;