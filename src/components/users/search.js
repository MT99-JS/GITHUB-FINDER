import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              name="text"
              className="form-control"
              placeholder="Search Users..."
              value={this.state.text}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            search
          </button>
        </form>
      </>
    );
  }
}

export default Search;
