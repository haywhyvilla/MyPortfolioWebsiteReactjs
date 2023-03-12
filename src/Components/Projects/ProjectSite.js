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
          <h5>
            Live Site <FiExternalLink />
          </h5>
          <h5>
            GitHub Link <FiExternalLink />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectSite;
