import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        This is about page with Users
        <UserClass name="vamsi" />
        <UserClass name="gopal" />
        <UserClass name="Naidu" />
      </div>
    );
  }
}

export default About;
