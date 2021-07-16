import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/admin">Admin panel</Link>
      <Link to="/admin/post-information">Admin - Post information</Link>
    </div>
  );
};

export default Home;
