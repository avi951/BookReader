import React, { useEffect, useState } from "react";
import { Link, Form, redirect } from "react-router-dom";
import FormRow from "../components/FormRow.jsx";
import SubmitBtn from "../components/SubmitBtn.jsx";
import customFetch from "../../utils/customFetch.js";
// import registerIllustration from "../asserts/images/register.svg"
import Wrapper from "../asserts/wrapper/Register.js";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    // console.log("Successufully");
    toast.success("Register successful");
    return redirect("/login");
  } catch (error) {
    toast.error(
      error?.response?.data?.error?.msg || error?.response?.data?.error[0]?.msg
    );
    // console.log(error);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <div className="regMain">
        <h3 style={{ textAlign: "center" }}>Register</h3>
        <div className="regContainer">
          <div className="imgSide">
            <div className="illustration">
              <h3 style={{ margin: "2rem 2rem" }}>
                Welcome to BookReminder.com
              </h3>
              {/* <img src={registerIllustration} width="300px" alt="" /> */}
            </div>
          </div>
          <div className="regForm">
            <div className="input-container">
              <Form method="post" className="regText">
                {/* <label htmlFor="" className="label">Name: </label> */}
                <FormRow
                  // labelText="Name:&nbsp;"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                {/* <FormRow
          labelText="Last name"
          type="text"
          name="name"
          placeholder="XYZ"
        /> */}
                <FormRow
                  // labelText="Email"
                  type="text"
                  name="email"
                  placeholder="Email Id"
                />
                <div className="errorcontainer"></div>
                <FormRow
                  // labelText="Password"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <SubmitBtn />
                <p>
                  Already a member?
                  <Link to="/login" className="member-btn">
                    Login
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
