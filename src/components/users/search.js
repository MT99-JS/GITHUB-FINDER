import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const Search = ({ showClear }) => {
  const githubContext = useContext(GithubContext);
  const { searchUsers, clearUsers, users } = githubContext;
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);

    setText("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="text"
            className="form-control"
            placeholder="Search Users..."
            value={text}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Search
        </button>
      </form>
      {users.length > 0 && (
        <button
          type="submit"
          className="btn btn-danger btn-block"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </>
  );
};

export default Search;
