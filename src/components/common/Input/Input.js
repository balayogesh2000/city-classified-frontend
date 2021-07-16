import React from "react";

import classes from "./Input.module.css";

import "./Input.module.css";

const Input = ({ type, label, placeholder, required }) => {
  return (
    <div className={`form-group ${classes.input}`}>
      <label>
        {label}
        {required && " *"}
        <input
          type={type}
          className={`form-control`}
          id="input"
          placeholder={placeholder}
          required={required}
        />
      </label>
    </div>
  );
};

export default Input;
