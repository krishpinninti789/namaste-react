import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello bull reddy</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => <h1>This is title from the component composition</h1>;

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>Hello from the functional component</h1>
    </div>
  );
};

root.render(<HeadingComponent />);
