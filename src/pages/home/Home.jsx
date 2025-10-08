import React, { useState } from "react";
import About from '../../pages/about/About'
import Skills from '../../pages/skills/Skills'
import Projects from '../../pages/projects/Project'
import Contact from '../../pages/contact/Contact'
import "./Home.css";
import { toast } from "react-toastify";
import { FaRegCircleCheck, FaRegCopy } from "react-icons/fa6";


const LinkedInButton = () => {
  return (
    <a
      target="_blank"
      href="https://www.linkedin.com/in/ganpathada/"
      id="linkedin-button"
      className="home-buttons"
    >
      Linkedin
    </a>
  );
};

const GithubButton = () => {
  return (
    <a
      target="_blank"
      href="https://github.com/GanpatHada"
      id="github-button"
      className="all-centered home-buttons"
    >
      Github
    </a>
  );
};

const NpxButton=()=>{
  const[isCopied,setIsCopied]=useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npx ganpat_hada");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };
  return(
    <button id="npx-button" className="home-buttons" onClick={handleCopy}>
        npx ganpat_hada <span>{isCopied?<FaRegCircleCheck />:<FaRegCopy />}</span>
    </button>
  )
}

const OpenToWork = () => {
  return (
    <section id="open-to-work">
      <span id="green-light"></span>
      <span id="open-to-work-text">Available for opportunities</span>
    </section>
  );
};

const Intro = () => {
  return (
    <section id="intro">
      <p id="short-intro">
        I am <span>Ganpat Hada,</span> <br /> A full stack web developer
      </p>
      <p id="long-intro">
        With hands-on experience in the MERN stack, I craft seamless user
        experiences and efficient server-side solutions. <br /> Open to
        learning new technologies and tackling challenging projects.
      </p>
    </section>
  );
};

const Home = () => {
  return (
    <div id="home" className="all-centeredd">
      <div id="home-content">
        <OpenToWork />
        <Intro />
        <section id="home-action">
          <LinkedInButton />
          <GithubButton />
          <NpxButton/>
        </section>
      </div>
      <hr className="main-saperator" />
      <About/>
      <hr className="main-saperator" />
      <Skills/>
      <Projects/>
      <hr className="main-saperator" />
      <Contact/>
    </div>
  );
};

export default Home;
