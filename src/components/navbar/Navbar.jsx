import React from "react";
import "./Navbar.css";
import mainLogo from "../../assets/mainLogo.svg";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav id="main-nav" className="all-centered">
      <section id="main-logo">
        <Link to="/">
          <img src={mainLogo} alt="" />
        </Link>
      </section>
      <section id="nav-items" className="all-centered">
        <Link to={"/about"} className="nav-item all-centered">
          About
        </Link>
        <Link className="nav-item all-centered">Skills</Link>
        <Link to={"/projects"} className="nav-item all-centered">
          Projects
        </Link>
        <Link className="nav-item all-centered">Blogs</Link>
        <Link className="nav-item all-centered">Contact</Link>
      </section>
      <section >
        <a href='resume.pdf' download='Ganpat_resume.pdf' title="download resume" className="all-centered" id="resume-button">Resume<span><FiDownload /></span></a>  
      </section>
    </nav>
  );
};
export default Navbar;
