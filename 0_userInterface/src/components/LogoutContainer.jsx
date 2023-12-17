import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashLayout";
import React from 'react'
import Wrapper from "../asserts/wrapper/LogoutContainer";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";

const LogoutContainer = () => {
  // const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
   const hoverStyle = {
     backgroundColor: "black",
     color: "white",
     // Add other styles you want to apply on hover
   };

    return (
      <Wrapper>
        <Dropdown>
          <Dropdown.Toggle
            variant="dark"
            id="dropdown-basic"
            style={{ border: "1px solid white" }}
          >
            {/* {user.avatar ? (
              <img src={user.avatar} alt="avatar" className="img" />
            ) : (
              <FaUserCircle
                style={{
                  marginRight: "3px",
                  height: "1.4rem",
                  width: "1.4rem",
                }}
              />
            )}
            {"  "}
            {user?.name} */}

            <FaUserCircle
              style={{
                marginRight: "3px",
                height: "1.4rem",
                width: "1.4rem",
              }}
            />
            {"  "}
            {user?.name}
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ backgroundColor: "black" }}>
            <Dropdown.Item
              onClick={logoutUser}
              className="dropdown-btn"
              style={hoverStyle}
            >
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Wrapper>

      // <Wrapper>
      //   <button
      //     type="button"
      //     className="btn logout-btn"
      //     onClick={() => setShowLogout(!showLogout)}
      //   >
      //     {user.name ? (
      //       <img src={user.name} alt="avatar" className="img" />
      //     ) : (
      //       <FaUserCircle />
      //     )}
      //     {user?.name}
      //     <FaCaretDown />

      //   </button>
      //   <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
      //     <button type="button" className="dropdown-btn" onClick={logoutUser}>
      //       logout
      //     </button>
      //   </div>
      // </Wrapper>
    );
}

export default LogoutContainer