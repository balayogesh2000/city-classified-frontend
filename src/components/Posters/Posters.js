import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./Posters.module.css";

const Posters = () => {
  return (
    <div className={classes.Posters}>
      <h4 className={classes.title}>Posters Panel</h4>
      <div className={classes.body}>
        <Link to="/posters/post-classifieds">
          <Button>Post Classifieds</Button>
        </Link>
      </div>
    </div>
  );
};

export default Posters;
