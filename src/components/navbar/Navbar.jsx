import "./Navbar.css";
import { FaSpotify } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav id="main-nav" >
      <div id="main-nav-content"> 
        <section id="nav-items" className="all-centered">
          <a href={"/#about"} className="nav-item all-centered">
            About
          </a>
          <a href={"/#skills"} className="nav-item all-centered">
            Skills
          </a>
          <a href={"/#projects"} className="nav-item all-centered">
            Projects
          </a>
          <a href={"https://ganpathada.hashnode.dev/"} target="_blank" className="nav-item all-centered">
            Blogs
          </a>
          <a href={"/#contact"} className="nav-item all-centered">
            Contact
          </a>
          <a href={"/spotify"} className="nav-item all-centered">
            <span className="all-centered"><FaSpotify /></span>
            &nbsp;Spotify
          </a>
        </section>
        
      </div>
    </nav>
  );
};
export default Navbar;
