import React from "react";
import "./Project.css";
import projects from "../../../src/Projects.json";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";


const ProjectCard = ({
  project: { title, description, image, github, live, tags },
}) => {
  return (
    <div className="project-card">
      <div className="info-section">
        <h1>{title}</h1>
        <p>{description}</p>
        <section id="tags-section">
        {tags.map((tag,index)=><div key={index} className="tag">{tag}</div>
        )}
        </section>
        <section className="card-actions">
          <a
            className="all-centered"
            title="source code"
            target="_blank"
            href={github}
          >
            <FiGithub />
          </a>
          <a
            className="all-centered"
            title="live link"
            target="_blank"
            href={live}
          >
            <HiOutlineExternalLink />
          </a>
        </section>
        
      </div>
    </div>
  );
};

const Project = () => {

  return (
    <div id="projects" className="home-sections">
      <header>
        <h1>
          <span>{"<"}</span>Projects<span>{" />"}</span>
        </h1>
      </header>
      <main id="projects-content">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </main>
    </div>
  );
};

export default Project;
