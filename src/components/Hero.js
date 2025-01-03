import React from 'react';
import { Link } from "react-router-dom";
import './Hero.css';
import hero from '../images/shan.png';

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
            <div className='social-icons'>
                <div>
                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.discord.com/"><i className="fa-brands fa-discord"></i></a>
                </div>
            </div>
        </div>
        <div className="hero-character">
            <img src={hero} alt="Character" loading='lazy'/>
        </div>
    </section>
    );
}

export default Hero;