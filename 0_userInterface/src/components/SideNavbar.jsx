import React from "react";
import Wrapper from "../asserts/wrapper/SideNavbar.js";
import { FaTimes } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashLayout.jsx";
import NavLinks from "./NavLinks.jsx";
const SideNavbar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="sideNavBar_main">
        <div className="sideNavBar_logo"></div>
        <div className="sideBarContent">
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  );
};

export default SideNavbar;
