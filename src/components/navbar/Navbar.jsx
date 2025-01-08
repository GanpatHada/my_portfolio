import React, { useContext } from "react";
import "./Navbar.css";
import mainLogo from "../../assets/mainLogo.svg";
import { Link, NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { SideNavContext } from "../../context/SideNavContext";

const Navbar = () => {
  const { setSideNav } = useContext(SideNavContext);
  return (
    <nav id="main-nav" className="all-centered">
      <div id="main-nav-content">
        <section id="main-logo">
          <NavLink to="/">
            <img src={mainLogo} alt="" />
          </NavLink>
        </section>
        <section id="nav-items" className="all-centered">
          <NavLink to={"/"} className="nav-item all-centered">
            Home
          </NavLink>
          <NavLink to={"/about"} className="nav-item all-centered">
            About
          </NavLink>
          <NavLink to={"/skills"} className="nav-item all-centered">
            Skills
          </NavLink>
          <NavLink to={"/projects"} className="nav-item all-centered">
            Projects
          </NavLink>
          <NavLink to={"/blogs"} className="nav-item all-centered">
            Blogs
          </NavLink>
          <NavLink to={"/contact"} className="nav-item all-centered">
            Contact
          </NavLink>

          <a
            href="GanpatHada_resume.pdf"
            download="GanpatHada_resume.pdf"
            title="download resume"
            className="all-centered nav-item"
            id="resume-button"
          >
            Resume
            <span>
              <FiDownload />
            </span>
          </a>
        </section>
        <span id="open-sidenav-button"  onClick={() => setSideNav(true)}>
          <RxHamburgerMenu />
        </span>
        <section id="talk-section">
          <Link to={"/contact"} id="talk-button">
            Let's talk
          </Link>
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
