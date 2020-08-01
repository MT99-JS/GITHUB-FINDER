import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="d-flex justify-content-center">
      <a href={repo.html_url} id={repo.id} className="card-text">
        <h5 className="card-title">{repo.name}</h5>
      </a>
    </div>
  );
};

export default RepoItem;
