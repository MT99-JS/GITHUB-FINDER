import React, { Fragment, Component } from "react";
import Navbar from "./components/header/Navbar";
import User from "./components/users/User";
import Search from "./components/users/search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import axios from "axios";
import SpecificUser from "./components/users/SpecificUser";

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    repos: [],
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
  getUser = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };
  getRepo = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };
  clearUsers = (e) => {
    this.setState({ users: [] });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                  />
                  <User loading={this.state.loading} users={this.state.users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <SpecificUser
                  getUser={this.getUser}
                  getRepo={this.getRepo}
                  {...props}
                  user={this.state.user}
                  repos={this.state.repos}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
