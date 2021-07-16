import React from "react";

import classes from "./Select.module.css";

const Select = ({ label, required, options }) => {
  return (
    <div className={`form-group ${classes.select}`}>
      <label>
        {label}
        {required && " *"}
        <select id="input" className="form-control">
          {options.map((option, idx) => {
            return <option key={idx}>{option}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default Select;
