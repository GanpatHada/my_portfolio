import React from "react";
import "./Skills.css";
import { skillsList } from "../../utils/SkillsUtils";

const Skills = () => {
  return (
    <div className="app-pages" id="skill-page">
      <header>
        <h1>Skills</h1>
      </header>
      <main className="app-page-content">
        <div id="skills">
          {skillsList.map(({name,image,description}, index) => {
            return (
              <div className="skill-box" key={index}>
                <section className="image-section">
                  <img src={image} alt="" />
                </section>
                <section className="info-section">
                  <h5>{name}</h5>
                  <p>{description}</p>
                </section>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Skills;
