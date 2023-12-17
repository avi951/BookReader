import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./components.css";
import { useDashboardContext } from "../pages/DashLayout";

const BigNavbar = () => {
  const data = useDashboardContext();
  // console.log("BIGNAVABAR", data);

  return (
    <Navbar expand="lg" id="s" style={{ padding: "0rem 3rem" }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          BookReminder.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ letterSpacing: "2px" }}>
            <Nav.Link style={{ color: "white" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/about-us">
              Explore Books
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/about-us">
              Order From
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/about-us">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BigNavbar;
