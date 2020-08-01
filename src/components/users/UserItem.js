import React, { Component } from "react";
import "./useritem.css";
import { Link } from "react-router-dom";

class UserItem extends Component {
  render() {
    const { login, html_url, avatar_url } = this.props.user;
    return (
      <div className="container">
        <img src={avatar_url} alt="" />
        <h2>{login}</h2>
        <Link to={`/user/${login}`}>Details</Link>
      </div>
    );
  }
}

export default UserItem;
