import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import love from "../../Image/Vector.png";
import MyCv from "./MyResume.pdf";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import ball from "../../Image/Star1.png";
import Fade from "react-reveal/Fade";
const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill />{" "}
          </p>
        ) : (
          <p className="sun-light-icon">
            <BsSun />
          </p>
        )}
      </div>
      <div className="container home-content">
        <Fade right>
          <h1>
            Hello <img alt="vector" src={love} />, I'm a
          </h1>

          <h2>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Software Engineer",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h2>
        </Fade>

        <Fade bottom>
          <div className="button-for-action">
            <div className="hire-me-button">Hire Me</div>
            <div className="get-resume-button">
              <a href={MyCv} download="Ayobami_cv">
                Get Resume
              </a>
            </div>
          </div>
        </Fade>
        <img className="baller" alt="balling" src={ball} />
      </div>
    </div>
  );
};

export default Home;
