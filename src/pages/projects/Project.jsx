import React from "react";
import "./Project.css";
import Card from "../../components/card/Card";
import projects from '../../../src/Projects.json'
import { FiFilter } from "react-icons/fi";
const Project = () => {
  return (
    <div id="project-page" className="app-pages">
      <header>
        <h1>Projects</h1>
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
