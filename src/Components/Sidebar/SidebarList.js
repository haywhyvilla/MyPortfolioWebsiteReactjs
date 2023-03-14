import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/Ay.jpg";
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";

import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>

          <ul>
            <li className="nav-item">
              <Link to="home">
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about">
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="project">
                <FcFactory size={25} /> Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="stack">
                <MdBiotech size={25} color="#a75fd2" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link>
                <MdCastForEducation size={25} /> Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="project">
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link>
                <FcSalesPerformance size={25} /> Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact">
                <FcContacts size={25} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcNightPortrait size={25} />
            </li>
            <li className="nav-item">
              <FcFactory size={25} />
            </li>
            <li className="nav-item">
              <MdBiotech size={25} color="#a75fd2" />
            </li>

            <li className="nav-item">
              <MdCastForEducation size={25} color="#a75fd2" />
            </li>
            <li className="nav-item">
              <FcTodoList size={25} />
            </li>
            <li className="nav-item">
              <FcSalesPerformance size={25} />
            </li>
            <li className="nav-item">
              <FcContacts size={25} />
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
