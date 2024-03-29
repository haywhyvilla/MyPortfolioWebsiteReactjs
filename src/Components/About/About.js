import React from "react";
import "./About.css";
import ProfilePic from "../../Image/Ay.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile" />
            </div>
          </div>
        </Fade>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h2>About Me</h2>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p className="description">
                Hi, my name is Olatunji Ayobami Samson. I'm a well-organized
                individual with the ability to perform various tasks, act
                individually, and think creatively with my willingness to learn
                and develop frontend development skills. Immersed in stylesheets
                tweaking font sizes and contemplating layouts is where you'll
                find me. I'm committed to creating fluent user experiences while
                staying fashionable. I'm Quietly Confident, Naturally Curious,
                And Constantly Working On Improving My Skills, One Solved
                Problem At A Time. Say hi to me on @haywhyvilla.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
