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
      Des: "oyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers.",
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
      Des: "oyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers.",
      ProjectLink: "https://crappogroupwork.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/FIntechfrontendtask",
      image: four,
    },
    {
      Des: "oyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers.",
      ProjectLink: "https://zuriteamgiraffew2-project.000webhostapp.com/",
      GithubLink: "https://github.com/haywhyvilla/FIntechfrontendtask",
      image: five,
    },
    {
      Des: "oyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers.",
      ProjectLink: "https://olatfood.netlify.app/",
      GithubLink: "https://github.com/haywhyvilla/FIntechfrontendtask",
      image: six,
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
