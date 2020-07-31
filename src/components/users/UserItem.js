import React, { Component } from "react";
import "./useritem.css";

class UserItem extends Component {
  render() {
    const { login, html_url, avatar_url } = this.props.user;
    return (
      <div className="container">
        <img src={avatar_url} alt="" />

        <a href={html_url}>
          <h2>{login}</h2>
        </a>
      </div>
    );
  }
}

export default UserItem;
