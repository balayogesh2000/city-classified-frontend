import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Link to="/admin">Admin panel</Link>
      <Link to="/posters">Posters panel</Link>
      <Link to="/information">View Information</Link>
      <Link to="/classifieds">View Classifieds</Link>
    </div>
  );
};

export default Home;
