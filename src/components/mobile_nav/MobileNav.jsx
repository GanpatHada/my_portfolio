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

  const handleNavsClick=()=>setSideNav(false);

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
          <NavLink onClick={handleNavsClick} to="/">Home</NavLink>
          <NavLink onClick={handleNavsClick} to="/about">About</NavLink>
          <NavLink onClick={handleNavsClick} to="/skills">Skills</NavLink>
          <NavLink onClick={handleNavsClick} to="/projects">Projects</NavLink>
          <NavLink onClick={handleNavsClick} to="/blogs">Blogs</NavLink>
          <NavLink onClick={handleNavsClick} to="/contact">Contact</NavLink>
        
        
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
