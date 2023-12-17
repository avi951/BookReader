import React from "react";
import PropTypes from "prop-types";
import { Form, Link, redirect } from "react-router-dom";
import FormRow from "../components/FormRow.jsx";
import SubmitBtn from "../components/SubmitBtn.jsx";
import customFetch from "../../utils/customFetch.js";
import Wrapper from "../asserts/wrapper/Register.js";
import Button from "react-bootstrap/esm/Button.js";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.error || error?.response?.data?.error[0]?.msg)
    return error;
  }
};

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <Wrapper>
        <div className="input-container">
          <Form method="post">
            <FormRow type="text" name="email" defaultValue="" placeholder="Email ID" />
            <FormRow
              type="password"
              name="password"
              // defaultValue="secret@123"
              placeholder="Password"
            />
            <SubmitBtn />
            <Button type="Button" variant="dark">
              explore the app
            </Button>
            <p>
              Not a member yet?
              <Link to="/register" className="member-btn">
                Register
              </Link>
            </p>
          </Form>
        </div>
      </Wrapper>
    </>
  );
};

Login.propTypes = {};

export default Login;
