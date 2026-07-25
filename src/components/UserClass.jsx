import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    console.log("Child Render");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>Count = {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>
        <h2>2+ years experience</h2>
        <h2>Node</h2>
      </div>
    );
  }
}

export default UserClass;
