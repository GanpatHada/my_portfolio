import React, { useContext } from "react";
import "./Navbar.css";
import mainLogo from "../../assets/mainLogo.svg";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { SideNavContext } from "../../context/SideNavContext";

const Navbar = () => {
  const{setSideNav}=useContext(SideNavContext)
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
        <a href='resume.pdf' download='Ganpat_resume.pdf' title="download resume" className="all-centered" id="resume-button">Resume<span><FiDownload /></span></a>  
      </section>
      <span id="open-sidenav-button" onClick={()=>setSideNav(true)}><RxHamburgerMenu /></span>
      <section id="talk-section" >
            <button id="talk-button">Let's talk👏</button>
      </section>
    </nav>
  );
};
export default Navbar;
