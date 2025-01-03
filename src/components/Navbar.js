import React from "react";
import  { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../images/logowhite.png';

function Navbar(){
    return(
        <header>
            <nav className="navbar">
                <div className="navbar-logo"> <img src={logo} alt="Logo" /> </div>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link"> <i class="fa-solid fa-house"></i> <span>Home</span> </Link>
                    <Link to="/about" className="navbar-link"> <i class="fa-solid fa-address-card"></i> <span>About</span></Link>
                    <Link to="/projects" className="navbar-link"> <i class="fa-solid fa-video"></i> <span>Projects</span></Link>
                    <Link to="/contact" className="navbar-link"> <i class="fa-solid fa-address-book"></i> <span>Contact</span></Link>
                </div>
            </nav>

        </header>
    );
}

export default Navbar;