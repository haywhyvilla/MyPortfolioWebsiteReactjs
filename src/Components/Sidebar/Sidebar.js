import React, { useState } from "react";
import Home from "../Home/Home";
import "./Sidebar.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  const [expendSidebar, setExpandSidebar] = useState(true);

  const handleExpandClick = () => {
    setExpandSidebar(!expendSidebar);
  };
  return (
    <div className="container-fluid sidebar-section">
      <div className={expendSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={handleExpandClick}>
            {expendSidebar ? (
              <BsChevronLeft size={30} color="#a75fd2" />
            ) : (
              <BsChevronRight size={30} color="#a75fd2" />
            )}
          </p>
        </div>
        <SidebarList expandSidebar={expendSidebar} />
      </div>

      <div className="container-fluid">
        <Home />
      </div>
    </div>
  );
};

export default Sidebar;
