import React from "react";
import "../../App.css";

const navbar = (props) => {
  return (
    <div className="App-header">
      <h1>{props.title}</h1>
    </div>
  );
};
navbar.defaultProps = {
  title: "Github Finder",
};

export default navbar;
