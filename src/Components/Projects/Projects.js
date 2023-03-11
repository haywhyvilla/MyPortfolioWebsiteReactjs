import React from "react";
import "./Projects.css";
import ProjectSite from "./ProjectSite";

const Projects = () => {
  const data = [
    {
      Des: "oyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers.",
      ProjectLink: "https://myfrontendintership.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/FIntechfrontendtask",
      techused: [
        {
          techname: "ReactJS",
        },
        {
          techname: "CSS",
        },
      ],
    },
    {
      Des: "Reports of transactions.",
      ProjectLink: "https://pavilionstage3project.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/PavilionFrontendTask",
      techused: [
        {
          techname: "ReactJS",
        },
        {
          techname: "CSS",
        },
      ],
    },
    {
      Des: "A feature that displays a list of NFTs",
      ProjectLink: "https://myfrontendintership.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/AlturaFrontendTask",
      techused: [
        {
          techname: "ReactJS",
        },
        {
          techname: "CSS",
        },
      ],
    },

    {
      Des: "oyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers.",
      ProjectLink: "https://crappogroupwork.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/FIntechfrontendtask",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Vanilla JavaScript",
        },
      ],
    },
    {
      Des: "oyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers.",
      ProjectLink: "https://zuriteamgiraffew2-project.000webhostapp.com/",
      GithubLink: "https://github.com/haywhyvilla/FIntechfrontendtask",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Vanilla JavaScript",
        },
      ],
    },
    {
      Des: "oyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers.",
      ProjectLink: "https://olatfood.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/FIntechfrontendtask",
      techused: [
        {
          techname: "HtML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Vanilla JavaScript",
        },
      ],
    },
  ];
  return (
    <div className="container">
      <div className="section-title">
        <h2>Projects</h2>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectSite {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
