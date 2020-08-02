import React from "react";
import User from "../components/users/User";
import Search from "../components/users/search";

const Home = () => {
  return (
    <div>
      <Search />
      <User />
    </div>
  );
};

export default Home;
