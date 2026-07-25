import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/krishpinninti789");
    const json = await data.json();
    this.setState(
      {
        userInfo: json,
      },
      () => {
        console.log(this.state.userInfo);
      },
    );
  }

  render() {
    if (!this.state.userInfo) {
      return null;
    }
    console.log("Child Render");
    // const { name } = this.props;
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>{name}</h1>
        <h2>Location {location}</h2>
        <img src={avatar_url} alt="profile" />

        <h2>2+ years experience</h2>
        <h2>Node</h2>
      </div>
    );
  }
}

export default UserClass;
