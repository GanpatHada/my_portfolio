import React from "react";
import "./Project.css";
import Card from "../../components/card/Card";
import projects from '../../../src/Projects.json'
import { FiFilter } from "react-icons/fi";
const Project = () => {
  return (
    <div id="project-page" className="app-pages">
      <header>
        <h1>My Projects</h1>
        <div id="project-filter">
            <section id="project-filter-text">All</section>
            <section id="project-filter-image">
              <FiFilter />
            </section>
        </div>
      </header>
      <main className="app-page-content">
        
        {
        projects.map(project=>{
          return(
            <Card key={project.id} title={project.title} imageUrl={project.image} description={project.description} liveLink={'/'} sourceCode={'/'}/>
          )
        })
      }
      </main>
    </div>
  );
};

export default Project;
