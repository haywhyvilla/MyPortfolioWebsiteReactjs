import React from "react";
import "./Projects.css";
import { FiExternalLink } from "react-icons/fi";

const ProjectSite = ({ Des, ProjectLink, GithubLink, image }) => {
  return (
    <div className="project-site">
      <div className="projects">
        <div>
          <p>{Des}</p>
        </div>
        <div>
          <img src={image} />
        </div>

        <div>
          <a href={ProjectLink}>
            Live Site <FiExternalLink />
          </a>
          <a target="_" href={GithubLink}>
            GitHub Link <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSite;
