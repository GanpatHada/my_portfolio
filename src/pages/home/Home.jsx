import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div id="home-page" className="all-centered">
      <div id="home-content">
        <section id="open-to-work">
            <span id="green-light"></span>
            <span id="open-to-work-text">Available for opportunities</span>
        </section>
        <section id="intro">
        <p id="short-intro">
          I am <span>Ganpat Hada</span> , I design and develop visually
          appealing and user-friendly webapps
        </p>
        </section>
       <section id="home-action">
       <a target="_blank" href="https://www.linkedin.com/in/ganpathada/" id="linkedin-button" className="home-buttons">
          Linkedin
          
        </a>
        <a target="_blank" href="https://github.com/GanpatHada" id="github-button" className="all-centered home-buttons">
          Github 
          
        </a>
       </section>
        
      </div>
    </div>
  );
};

export default Home;
