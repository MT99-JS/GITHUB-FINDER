import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/GithubContext";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos, getRepos } = githubContext;
  return repos.map((repo) => <RepoItem repo={repo} />);
};

export default Repos;
