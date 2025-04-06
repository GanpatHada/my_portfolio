import React from "react";
import "./About.css";
const About = () => {
  return (
    <main id="about" className="home-sections">
      <header>
      <h1><span>{"<"}</span>About<span>{" />"}</span></h1>
      </header>
      <div id="about-content">
        I'm a dedicated software developer with a strong foundation in
        full-stack web development <br />
        <br />
        I strongly believe in the power of project-based learning as a means to
        gain practical knowledge and real-world experience. By building projects
        that solve real problems, I continuously refine my technical and
        problem-solving skills. This approach has not only enhanced my ability
        to understand complex concepts but also prepared me to contribute
        effectively to team-based environments and deliver impactful solutions
        in professional settings. <br />
        <br />
        My expertise lies in building responsive and interactive front-end
        applications using React, and developing efficient and scalable back-end
        systems with Express and Java. With a passion for crafting seamless user
        experiences and robust server-side solutions, I thrive on solving
        complex challenges and contributing to impactful projects. I'm always
        eager to learn and grow, leveraging my skills to drive innovation and
        deliver high quality software solutions.
      </div>
    </main>
  );
};

export default About;
