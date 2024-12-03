import React, { useContext } from "react";
import "./MobileNav.css";
import MainLogo from "../../assets/mainLogo.svg";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { SideNavContext } from "../../context/SideNavContext";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiDownload, FiTwitter } from "react-icons/fi";
const MobileNav = () => {
  const { sideNav, setSideNav } = useContext(SideNavContext);
  return (
    <nav
      id="mobile-nav"
      style={{ transform: `translateX(${sideNav ? "0px" : "-70vw"})` }}
    >
      <section>
        <NavLink to="/">
          <img id="mobile-logo" src={MainLogo} alt="" />
          <h5>Ganpat Hada</h5>
          <p>Full stack web developer</p>
        </NavLink>
        <span onClick={() => setSideNav(false)} id="close-button">
          <IoMdClose />
        </span>
      </section>
      <section>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/">Blogs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        
        
      </section>
      <div>
          <a id="resume-button-mobile" download='Ganpat_resume.pdf' href="resume.pdf">Resume <span><FiDownload /></span></a>
      </div>
      <section id="social-links-mobile">
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FiTwitter />
        </a>
        <a href="">
          <FaWhatsapp />
        </a>
      </section>
    </nav>
  );
};

export default MobileNav;
