import React from "react";

import classes from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <div className={classes.Title}>
      <h4>{title}</h4>
    </div>
  );
};

export default Title;
