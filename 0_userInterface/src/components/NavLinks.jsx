import React from "react";
import { useDashboardContext } from "../pages/DashLayout";
import { NavLink } from "react-router-dom";
import links from "../../utils/links.jsx";
import Wrapper from "../asserts/wrapper/SideNavbar.js";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <Wrapper>
      {/* <div className="nav-links"> */}
      {/* <div className="sideNavBar_main">
        <div className="sideNavBar_logo"></div>
        <div className="sideBarContent"> */}
          {links.map((link) => {
            const { text, path, icon } = link;
            return (
              <NavLink
                to={path}
                key={text}
                className="nav-link"
                onClick={isBigSidebar ? null : toggleSidebar}
                end
              >
                <span className="icon">{icon}</span>
                {text}
              </NavLink>
            );
          })}
        {/* </div>
      </div> */}
    </Wrapper>
  );
};

export default NavLinks;
