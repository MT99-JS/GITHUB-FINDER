import React, { Component } from "react";
import "./useritem.css";

class UserItem extends Component {
  render() {
    const { login, html_url, avatar_url } = this.props.user;
    return (
      <div className="container">
        <img src={avatar_url} alt="" />
        <h2>{login}</h2>
        <a href={html_url}>More</a>
      </div>
    );
  }
}

export default UserItem;
