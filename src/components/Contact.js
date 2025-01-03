import React from "react";
import Navbar from "./Navbar";
import './Contact.css';

function Contact(){
    return(
      <>
      <Navbar />
      <section className="section contact">
        <h2>GET IN TOUCH</h2>
      <form action="https://formspree.io/f/xqakkrzp" method="POST">
        <input type="text" id="name" name="name" required placeholder="Name" />
      
        <input type="email" id="email" name="email" required placeholder="Email" />
      
        <textarea id="message" name="message" required="required" placeholder="Your Message"></textarea>
      
        <button type="submit" id="formSubmitBtn">Send Message <i class="fas fa-arrow-right"></i></button>
      </form>
      </section>
      </>  
    );
}

export default Contact;