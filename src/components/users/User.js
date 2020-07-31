import React, { Component } from "react";
import UserItem from "./UserItem";

class User extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",

        url: "https://api.github.com/users/mojombo",
        html_url: "https://github.com/mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      },
      {
        id: "2",
        login: "defunkt",
        url: "https://api.github.com/users/defunkt",
        html_url: "https://github.com/defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
      },
      {
        id: "3",
        login: "pjhyett",
        url: "https://api.github.com/users/pjhyett",
        html_url: "https://github.com/pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default User;
