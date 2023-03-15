import React from "react";
import "./NavbarMobileveiw.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobileVeiw = () => {
  return (
    <div className="mobile-veiw-navber">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} />
        </p>
      </div>
    </div>
  );
};

export default NavbarMobileVeiw;
