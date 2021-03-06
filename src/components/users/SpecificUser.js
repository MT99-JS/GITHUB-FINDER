import React, { useEffects, useEffect, useContext } from "react";
import axios from "axios";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/GithubContext";

const SpecificUser = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, getRepo, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getRepo(match.params.login);
  }, []);

  const {
    login,
    name,
    avatar_url,
    blog,
    followers,
    following,
    location,
    public_repos,
    hireable,
    bio,
    html_url,
  } = user;
  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={avatar_url}
            className="d-block w-10"
            alt="..."
            style={{
              alignContent: "center",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              height: "200px",
              marginTop: "2px",
            }}
          />
        </div>
      </div>
      <div class="card text-center">
        <div class="card-header">
          <b>{name}</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <p className="card-text">{bio}</p>
          <a href={html_url} className="btn btn-primary">
            Visit Github Profile
          </a>
        </div>
        <div className="card-footer text-muted" style={{ color: "red" }}>
          Followers: {followers}
        </div>
        <div className="card-footer text-muted" style={{ color: "red" }}>
          Following: {following}
        </div>
        <div className="card-footer text-muted" style={{ color: "red" }}>
          Public Repositories: {public_repos}
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default SpecificUser;
