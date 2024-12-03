import React from "react";
import "./Skills.css";
import cImage from "../../assets/c.png";
import cppImage from "../../assets/c++.png";
import javaImage from "../../assets/java.png";
import jsImage from "../../assets/js.png";
import htmlImage from "../../assets/html.png";
import cssImage from "../../assets/css.png";
import reactImage from "../../assets/react.svg";
import nodeImage from "../../assets/node.png";
import bootstrapImage from "../../assets/Bootstrap.svg";
import mongodbImage from "../../assets/mongodb.svg";
import sqlImage from "../../assets/sql.svg";
import expressImage from "../../assets/express.png";
import tsImage from "../../assets/ts.png";
import fbImage from "../../assets/fb.svg";
import figmaImage from "../../assets/figma.png";
import springImage from "../../assets/spring.png";
import reduxImage from "../../assets/redux.svg";
import gitImage from "../../assets/git.png";


const Skills = () => {
  return (
    <div className="app-pages" id="skill-page">
      <header>
        <h1>Skills</h1>
      </header>
      <main className="app-page-content">
        <div id="skills">
          <div className="skill-box">
            <section className="image-section">
              <img src={cImage} alt="" />
            </section>
            <section className="info-section">
                <h5>{'C'}</h5>
                <p>{'mid level language'}</p>
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={cppImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={javaImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={jsImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={htmlImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={cssImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={cImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={reactImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={nodeImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={bootstrapImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={mongodbImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={sqlImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={expressImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={figmaImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={tsImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={fbImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={springImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={reduxImage} alt="" />
            </section>
          </div>
          <div className="skill-box">
            <section className="image-section">
              <img src={gitImage} alt="" />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
