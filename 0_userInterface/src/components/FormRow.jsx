import React from "react";
import Wrapper from "../asserts/wrapper/Register";
const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
  accept,
  placeholder,
}) => {
  if (type == "textarea") {
    return (
      <Wrapper>
        <div className="form-row">
          <label htmlFor={name} className="form-label">
            {labelText}{" "}
          </label>
          <textarea
            name="bookDescription"
            id="bookDescription"
            cols="40"
            rows="7"
            style={{ border: "0.5px solid black", borderRadius: "5px" }}
          ></textarea>
        </div>
      </Wrapper>
    );
  }
  if (name == "link") {
    return (
      <Wrapper>
        <div className="form-row">
          <label htmlFor={name} className="form-label">
            {labelText}{" "}
          </label>
          <input
            style={{ width: "75%" }}
            className="input-field"
            type={type}
            name={name}
            id={name}
            // defaultValue={defaultValue || ""}
            onChange={onChange}
            defaultValue={defaultValue || ""}
            // required
          />
        </div>
      </Wrapper>
    );
  }
  if (type == "file") {
    return (
      <Wrapper>
        <div className="form-row">
          <label htmlFor="" className="form-label">
            {labelText}{" "}
          </label>
          <input
            className="input-field"
            type={type}
            name={name}
            id={name}
            onChange={onChange}
            accept="/image/*"
            defaultValue={defaultValue}
          />
        </div>
      </Wrapper>
    );
  }
  if (type == "date") {
    return (
      <Wrapper>
        <div className="form-row">
          <label htmlFor={name} className="form-label">
            {labelText}{" "}
          </label>
          <input
            className="input-field"
            type={type}
            name={name}
            id={name}
            // defaultValue={defaultValue || ""}
            onChange={onChange}
            defaultValue={defaultValue || ""}
            // required
          />
          <span className="validity"></span>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText}{" "}
        </label>
        <input
          className="input-field"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue || ""}
          // required
        />
      </div>
    </Wrapper>
  );
};

export default FormRow;
