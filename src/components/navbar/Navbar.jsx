import React  from "react";
import "./Navbar.css";
import mainLogo from "../../assets/mainLogo.svg";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav id="main-nav" >
      <div id="main-nav-content">
        <section id="main-logo">
          <a href="#home">
            <img src={mainLogo} alt="" />
          </a>
        </section>
        <section id="nav-items" className="all-centered">
          <a href={"#about"} className="nav-item all-centered">
            About
          </a>
          <a href={"#skills"} className="nav-item all-centered">
            Skills
          </a>
          <a href={"#projects"} className="nav-item all-centered">
            Projects
          </a>
          <a href={"https://ganpathada.hashnode.dev/"} target="_blank" className="nav-item all-centered">
            Blogs
          </a>
          <a href={"#contact"} className="nav-item all-centered">
            Contact
          </a>
        </section>
        <a
            href="GanpatHada_resume.pdf"
            download="GanpatHada_resume.pdf"
            title="download resume"
            className="all-centered nav-item primary-button"
            id="resume-button"
          >
            Resume
            <span>
              <FiDownload />
            </span>
          </a>
      </div>
    </nav>
  );
};
export default Navbar;
