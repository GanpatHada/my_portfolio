import "./Header.css";
import mainLogo from "../../assets/G-logo.png";
import { FiDownload } from "react-icons/fi";
const Header = () => {
  return (
    <article>
      <header id="main-header">
        <button id="main-logo">
          <a href="/#home">
            <img src={mainLogo} alt="" />
            <h4>Ganpat Hada</h4>
          </a>
          
        </button>
        <button className="all-centered primary-button" id="resume-button">
          <a
            href="GanpatHada_resume.pdf"
            download="GanpatHada_resume.pdf"
            title="download resume"
            
          >
            Resume
            <span>
              <FiDownload />
            </span>
          </a>
        </button>
      </header>
    </article>
  );
};

export default Header;
