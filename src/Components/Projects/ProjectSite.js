import React from "react";
import "./Projects.css";

const ProjectSite = ({ Des, ProjectLink, GithubLink, techused, image }) => {
  return (
    <div className="project-site">
      <div className="">
        <div className="">
          <img src={image} />
        </div>
        <h5>{Des}</h5>
      </div>
    </div>
  );
};

export default ProjectSite;
