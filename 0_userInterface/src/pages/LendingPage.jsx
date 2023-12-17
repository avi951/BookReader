import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BigNavbar from "../components/BigNavbar.jsx";
import Button from "react-bootstrap/Button";
import LendingMainBody from "./LendingMainBody.jsx";
import CarousalContainer from "../components/CarousalContainer.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Wrapper from "../asserts/wrapper/LandinPage.js";

const LendingPage = () => {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log('1');
      setLoading(false);
    }, 3000);
  }, []);

  if (Loading) {
    return (
      <>
        <div>
          <h2>Loading...</h2>
        </div>
      </>
    );
  } else {
    return (
      <Wrapper>
        <div className="navbar">
          <BigNavbar />
          <ul className="nav-links">
            <li>
              <Link to="/register">
                <Button variant="dark">Register</Button>
                {/* <Button variant="outline-light">Register</Button>{" "} */}
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Button variant="dark">Login</Button>
              </Link>
            </li>
          </ul>
        </div>
        <LendingMainBody />
        <CarousalContainer />
        <AboutUs />
      </Wrapper>
    );
  }
 
};

export default LendingPage;
