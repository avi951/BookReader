import React from "react";
import bg_1 from "../asserts/images/bg_1.webp";
import Wrapper from "../asserts/wrapper/LandingMainBody";
import TypeWrite from "../components/TypeWrite";

const LendingMainBody = () => {
  return (
    <Wrapper>
      <div className="main_body">
        <img className="bg" src={bg_1}></img>
        <div className="text-border">
          <h1 className="main_headline">
            Hey, Bibliophile ! <br />
            <TypeWrite text=" Welcome To BookReminder.com" delay={100}/>
          </h1>
          <p className="main_subText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default LendingMainBody;
