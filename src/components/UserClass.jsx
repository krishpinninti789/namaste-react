import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>2+ years experience</h2>
        <h2>Node</h2>
      </div>
    );
  }
}

export default UserClass;
