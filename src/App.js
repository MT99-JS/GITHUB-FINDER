import React, { Fragment, useContext } from "react";
import Navbar from "./components/header/Navbar";

import GithubState from "./context/github/GithubState";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import axios from "axios";
import SpecificUser from "./components/users/SpecificUser";

const App = () => {
  //   async componentDidMount() {
  //     console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //     this.setState({ loading: true });
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     this.setState({ users: res.data, loading: false });
  //   }

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => <SpecificUser {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
