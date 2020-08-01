import React, { Fragment, useState } from "react";
import Navbar from "./components/header/Navbar";
import User from "./components/users/User";
import Search from "./components/users/search";
import GithubState from "./context/github/GithubState";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import axios from "axios";
import SpecificUser from "./components/users/SpecificUser";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  //   async componentDidMount() {
  //     console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //     this.setState({ loading: true });
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     this.setState({ users: res.data, loading: false });
  //   }

  const getRepo = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
  };
  const clearUsers = (e) => {
    setUsers([]);
  };

  return (
    <GithubState>
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
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                  />
                  <User users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <SpecificUser
                  getRepo={getRepo}
                  {...props}
                  user={user}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
