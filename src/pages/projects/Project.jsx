import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "./Project.css";
import projects from "../../../src/Projects.json";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";


const ProjectCard = ({
  project: { title, description, image, github, live, tags },index
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="project-card-wrapper"
      initial={{ opacity: 0}}
      animate={isInView ? { opacity: 1} : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="project-card">
        <h1>{title}</h1>
        <p>{description}</p>
        <section id="tags-section">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
        </section>
        <section className="card-actions">
          <a
            className="all-centered"
            title="source code"
            target="_blank"
            rel="noopener noreferrer"
            href={github}
          >
            <FiGithub />
          </a>
          <a
            className="all-centered"
            title="live link"
            target="_blank"
            rel="noopener noreferrer"
            href={live}
          >
            <HiOutlineExternalLink />
          </a>
        </section>
      </div>
    </motion.div>
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
        {projects.map((project,index) => {
          return <ProjectCard key={project.id} index={index} project={project} />;
        })}
      </main>
    </div>
  );
};

export default Project;
