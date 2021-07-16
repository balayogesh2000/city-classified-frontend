import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./Admin.module.css";

const Admin = () => {
  return (
    <div className={classes.Admin}>
      <h4 className={classes.title}>Admin Panel</h4>
      <div className={classes.body}>
        <Link to="/admin/post-information">
          <Button>Post Information</Button>
        </Link>
        <Link to="/admin/post-classifieds">
          <Button>Post Classifieds</Button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
