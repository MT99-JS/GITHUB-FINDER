import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const navbar = (props) => {
  return (
    <div className="App-header">
      <h1>{props.title}</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};
navbar.defaultProps = {
  title: "Github Finder",
};

export default navbar;
