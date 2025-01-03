import React from "react";
import Navbar from "./Navbar";
import './About.css';


function About(){
    return(
      <>
      <Navbar/>
      <section className="section about-me">
        <h2>ABOUT ME</h2>
        <p>
        Welcome to my creative space! I’m Shan-e-Ali, a passionate video editor dedicated to bringing your vision to life through dynamic storytelling and high-quality visuals. Whether it’s crafting compelling narratives or creating impactful short content, I’m here to deliver videos that resonate with your audience. <br/><br/>

With expertise in cash cow videos, long-form content, short videos, reels, showreels, and shorts, I provide a comprehensive range of video production services. From video recording to editing and adding stunning effects, I ensure every project stands out.
        </p>
      </section>
      <section className="section offers">
        <h3>WHAT I OFFER</h3>
        <ul>
          <li><strong>Cash Cow Videos:</strong> Eye-catching and engaging videos that boost your channel's growth.</li>
          <li><strong>Long Videos:</strong> Seamless editing for documentaries, interviews, and extended content.</li>
          <li><strong>Short Videos & Shorts:</strong> Perfect for grabbing attention on platforms like YouTube and TikTok.</li>
          <li><strong>Reels & Showreels:</strong> Highlight your best moments with a professional touch.</li>
          <li><strong>Video Recording & Effects:</strong> From capturing raw footage to adding cinematic effects, I handle it all.</li>
        </ul>
      {/* </section> */}
      {/* <section className="section tools"> */}
        <h3>TOOLS OF THE TRADE</h3>
        <p>I use industry-leading tools to ensure top-notch quality:</p>
        <ul>
          <li><strong>CapCut: </strong>Quick, efficient editing for trendy, engaging content.</li>
          <li><strong>Adobe Premiere Pro: </strong>The gold standard for professional video editing.</li>
          <li><strong>After Effects: </strong>Adding breathtaking animations, visual effects, and motion graphics.</li>
        </ul>

        <h3>LETS CREATE SOMETHING AMAZING</h3>
        <p>Whether you’re a brand, content creator, or individual looking to tell a story, I’m here to collaborate and make your vision a reality. Let’s bring your ideas to life with creativity and precision!
        </p>
      </section>
      </>  
    );
}

export default About;