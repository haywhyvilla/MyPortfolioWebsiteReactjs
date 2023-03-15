import React, { useState } from "react";
import "./NavbarMobileveiw.css";
import { GiHamburgerMenu } from "react-icons/gi";
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

const NavbarMobileVeiw = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="mobile-veiw-navber">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobileview">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={25} /> Work Experience
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link
                to="stack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={25} color="#000000" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <MdCastForEducation size={25} /> Education
            </li>
            <li className="nav-item-mobileview">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link>
                <FcSalesPerformance size={25} /> Testimonial
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileVeiw;
