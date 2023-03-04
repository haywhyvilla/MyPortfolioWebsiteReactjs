import React from "react";
import "./TechStack.css";

const TechStack = () => {
  const data = [
    {
      name: "Frontend Developer",
    },

    {
      name: "JavaScript",
    },
    {
      name: "React Js",
    },
    {
      name: "TypeScript",
    },
    {
      name: "CSS",
    },
    {
      name: "HTML5",
    },
    {
      name: "BootStrap",
    },
    {
      name: "TailwindCSS",
    },
    {
      name: "React Native",
    },
    {
      name: "Material UI",
    },
    {
      name: "SCSS",
    },
    {
      name: "Git",
    },
    {
      name: "GitHub",
    },
    {
      name: "Angular JS",
    },
    {
      name: "Vue JS",
    },
    {
      name: "Figma",
    },
  ];

  const colors = [
    "#FF4C33",
    "#FFE333",
    "#B2FF33",
    "#33FF58",
    "#33FFC1",
    "#33CAFF",
    "#3355FF",
    "#9333FF",
    "#F033FF",
    "#FF33C4",
    "#FF3386",
    "#FF334C",
    "#33FF42",
    "#FF3633",
    "#9C33FF",
    "#33FFF6",
  ];
  return (
    <div className="container techstack-section">
      <div className="section-title">
        <h2>Tech Stack</h2>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="tech-content">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
