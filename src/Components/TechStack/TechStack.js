import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

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
    {
      name: "Vanilla JS",
    },
    {
      name: "NodeJs",
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
    "#33FF58",
    "#FF33C4",
  ];

  const [showMoreTechStack, setMoreTechStack] = useState(9);

  const loadMore = () => {
    setMoreTechStack((prev) => prev + 3);
  };
  return (
    <div className="container techstack-section" id="stack">
      <div className="section-title">
        <h2>Tech Stack</h2>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                  index === 0
                    ? "tech-content-marked tech-content"
                    : "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
