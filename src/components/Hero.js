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
                    <a href="https://www.upwork.com/freelancers/~01f3efa2221fba5677" target="_blank"><i className="fa-brands fa-upwork"></i></a>
                    <a href="https://www.linkedin.com/in/shaneali110?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/shaneali.__" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    {/* <a href="https://www.discord.com/"><i className="fa-brands fa-discord"></i></a> */}
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