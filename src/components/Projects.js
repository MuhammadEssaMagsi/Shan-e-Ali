import React from "react";
import Navbar from "./Navbar";
import VideoGallery from "./VideoGallery";
import './Projects.css';

function Projects(){
    return(
      <>
      <Navbar />
      <section className="section projects">
        <h2>PROJECTS</h2>
      <VideoGallery />
      </section>
      </>  
    );
}

export default Projects;