import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Banglore",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/krishpinninti789");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("Hello unmount");
  }

  render() {
    if (!this.state.userInfo) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    const { name, location, avatar_url, html_url } = this.state.userInfo;
    return (
      <div>
        <h1>{name}</h1>
        <h2>Location {location}</h2>
        <img src={avatar_url} alt="profile" />
        <a rel="stylesheet" href={html_url} target="_blank">
          Check my profile
        </a>
      </div>
    );
  }
}

export default UserClass;
