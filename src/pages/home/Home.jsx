import React from "react";
import "./Home.css";
import Card from "../../components/card/Card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const Home = () => {
  return (
    <div id="home-page" className="all-centered">
      <div id="home-content">
        <section id="intro">
        <p id="short-intro">
          I am <span>Ganpat Hada</span> , I design and develop visually
          appealing and user-friendly webapps
        </p>
        </section>
       <section id="home-action">
       <button id="linkedin-button">
          Linked
          <span>
            <FaLinkedin />
          </span>
        </button>
        <button id="github-button" className="all-centered">
          Github 
          <span>
            <FaGithub />
          </span>
        </button>
       </section>
        
      </div>
    </div>
  );
};

export default Home;
