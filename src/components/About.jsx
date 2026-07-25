import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      This is about page with Users
      <User name="Krishnavamsi" />
      <UserClass name="vamsi" />
    </div>
  );
};

export default About;
