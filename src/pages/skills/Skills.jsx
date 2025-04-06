import React, { useState } from "react";
import "./Skills.css";
import { skillsList } from "../../utils/SkillsUtils";
import { IoContract, IoExpand } from "react-icons/io5";

const SkillDetails = ({ skill }) => {
  return (
    <section id="info-section">
      {skill && (
        <>
          <h1>{skill?.name}</h1>
          <span>{skill?.description}</span>
        </>
      )}
    </section>
  );
};

const SkillBox = ({ skill: { name, description, image }, setSkill ,expended }) => {
  return (
    <div
      onMouseEnter={() => setSkill({ name, description })}
      onMouseLeave={() => setSkill(null)}
      className="skill-box"
    >
      <section className="image-section">
        <img src={image} alt="" />
      </section>
      {expended && <section className="info-section">
        <h4>{name}</h4>
        <p>{description}</p>
      </section>}
    </div>
  );
};

const SkillGroup = ({ setSkill }) => {
  return (
    <div className="group">
      {skillsList.map((skill) => (
        <SkillBox key={skill.id} skill={skill} setSkill={setSkill} />
      ))}
    </div>
  );
};

const SkillSlider = ({ setSkill }) => {
  return (
    <section id="slider-section">
      <SkillGroup setSkill={setSkill} />
      <SkillGroup setSkill={setSkill} />
    </section>
  );
};

const ContractedSkills = ({ skill, setSkill }) => {
  return (
    <div id="contracted-skills">
      <SkillDetails skill={skill} />
      <SkillSlider setSkill={setSkill} />
    </div>
  );
};

const ExpandedSkills = () => {
  return (
    <div id="expanded-skills">
      {skillsList.map((skill) => {
        return <SkillBox key={skill.id} skill={skill} expended/>;
      })}
    </div>
  );
};

const SkillHeader = ({expended,setExpended}) => {
  return (
    <header>
      <h1>Techonlogies ,I work with</h1>
      <button title={expended?'minimize':'maximize'} onClick={()=>setExpended(!expended)}>
      {expended?<IoContract />:<IoExpand />}
      </button>
    </header>
  );
};

const Skills = () => {
  const [skill, setSkill] = useState(null);
  const [expended,setExpended]=useState(false)
  return (
    <div id="skills" className="home-sections">
      <header>
        <h1>
          <span>{"<"}</span>Skills<span>{" />"}</span>
        </h1>
      </header>
      <div id="skills-content">
        <SkillHeader expended={expended} setExpended={setExpended} />
        {expended ? <ExpandedSkills />:<ContractedSkills skill={skill} setSkill={setSkill} />}
      </div>
    </div>
  );
};

export default Skills;
