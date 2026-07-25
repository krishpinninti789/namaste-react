import React, { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div>
      <h1>{name}</h1>
      <h2>Count = {count}</h2>
      <h2>2+ years experience</h2>
      <h2>Node,Next,React</h2>
    </div>
  );
};

export default User;
