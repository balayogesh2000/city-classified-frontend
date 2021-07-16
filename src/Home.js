import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/admin">Admin panel</Link>
      <Link to="/admin/post-information">Admin - Post information</Link>
      <Link to="/admin/post-classifieds">Admin - Post Classfieds</Link>
      <Link to="/posters">Posters panel</Link>
      <Link to="/posters/post-classifieds">Posters - Post Classfieds</Link>
    </div>
  );
};

export default Home;
