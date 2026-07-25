import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>Count = {count}</h2>
        <h2>2+ years experience</h2>
        <h2>Node</h2>
      </div>
    );
  }
}

export default UserClass;
