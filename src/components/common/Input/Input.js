import React from "react";

import classes from "./Input.module.css";

import "./Input.module.css";

const Input = ({
  type,
  label,
  placeholder,
  required,
  value,
  onChange,
  pattern,
}) => {
  return (
    <div className={`form-group ${classes.input}`}>
      <label>
        {label}
        <span style={{ color: "red" }}>{required && " *"}</span>
        <input
          type={type}
          className={`form-control`}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          pattern={pattern}
        />
      </label>
    </div>
  );
};

export default Input;
