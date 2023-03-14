import React from "react";
import "./Projects.css";
import ProjectSite from "./ProjectSite";
import one from "../../Image/one.PNG";
import two from "../../Image/two.PNG";
import three from "../../Image/three.PNG";
import four from "../../Image/four.PNG";
import five from "../../Image/five.PNG";
import six from "../../Image/six.PNG";

const Projects = () => {
  const data = [
    {
      Des: "Empowering businesses to offer digital programs to customers.",
      ProjectLink: "https://myfrontendintership.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/FIntechfrontendtask",
      image: one,
    },
    {
      Des: "Reports of transactions.",
      ProjectLink: "https://pavilionstage3project.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/PavilionFrontendTask",
      image: two,
    },
    {
      Des: "A feature that displays a list of NFTs",
      ProjectLink: "https://myfrontendintership.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/AlturaFrontendTask",
      image: three,
    },

    {
      Des: "Fastest & secure platform to invest in crypto.",
      ProjectLink: "https://crappogroupwork.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/CRAPPOprojectk",
      image: four,
    },
    {
      Des: "Credit card design library.",
      ProjectLink: "https://zuriteamgiraffew2-project.000webhostapp.com/",
      GithubLink: "https://github.com/haywhyvilla/Team-Giraffew2",
      image: five,
    },
    {
      Des: "AI food delivery.",
      ProjectLink: "https://olatfood.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/Olatfood-PROJECT",
      image: six,
    },
  ];
  return (
    <div className="container section-project" id="project">
      <div className="section-title bottom">
        <h2>Projects</h2>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 bottom left"
            key={index}
          >
            <ProjectSite {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
