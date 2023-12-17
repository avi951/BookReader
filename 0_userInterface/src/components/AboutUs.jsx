import React from "react";
import Wrapper from "../asserts/wrapper/AboutUs";

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="aboutContainer">
        <h2 className="aboutHeading" style={{ textAlign: "center" }}>About Us</h2>
        <p className="aboutText" style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores,
          fugit reprehenderit ullam at hic, dicta nam, voluptates voluptate
          dolores asperiores. Odio assumenda est blanditiis laboriosam
          praesentium fuga porro reprehenderit.
        </p>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
