import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hii");
    }, 1000);
    return () => clearInterval(timer);
  }, []);
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
