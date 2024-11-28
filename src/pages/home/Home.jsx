import React from "react";
import "./Home.css";
import Card from "../../components/card/Card";
const Home = () => {
  return (
    <div id="home-page" className="all-centered">
      <div id="home-content">
      <p id="initial-intro">Hi, I am</p>
      <h2 id="name">Ganpat Hada</h2>
      <p id="short-intro">I build and design things for the web</p>
      <p id="detailed-intro">
        Full stack web developer having specialization in building
        web applications using MongoDB, Express.js, React, and
        Node.js, With expertise in both front-end and back-end development
      </p>
      <button id="linkedin-button">
        LinkedIn
      </button>
      <button id="github-button">
        Github
      </button>
      </div>
    </div>
  );
};

export default Home;
