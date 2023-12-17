import React from "react";
import bg_2 from "../asserts/images/bg_2.webp";
import Wrapper from "../asserts/wrapper/UserMainPage";
import { useDashboardContext } from "./DashLayout";
import TypeWrite from "../components/TypeWrite.jsx";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const {user} = useDashboardContext();
  return (
    <Wrapper>
      <div className="main_body">
        <img className="bg" src={bg_2}></img>
        {/* // <h1 className="main_headline">Hey, {user.name} </h1> */}
        <h1 className="main_headline">
          Hey, <TypeWrite text={`${user.name} ! /`} delay={300} infinite />{" "}
        </h1>
        {/* <h1 className="main_headline">Hey, <TypeWrite  text={user.name} delay={2000} infinite/> </h1> */}
        <p className="main_headline_text">WANT TO EXPLORE NEW BOOKS</p>
        <Button
          variant="dark"
          className="main_headline_btn"
          style={{ color: "white" }}
        >
          <Link to="/dashboard/myProfile"> MY PROFILE</Link>
        </Button>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
