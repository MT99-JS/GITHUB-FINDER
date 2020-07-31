import React, { Component } from "react";
import Navbar from "./components/header/Navbar";
import User from "./components/users/User";
import Search from "./components/users/search";

import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  //   async componentDidMount() {
  //     console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //     this.setState({ loading: true });
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     this.setState({ users: res.data, loading: false });
  //   }
  searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <User loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}
export default App;
