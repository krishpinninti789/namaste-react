import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="header">
      <Logo />

      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Contact</li>
        <li>Cart</li>
        <button
          className="fltr-btn"
          onClick={() =>
            btnName === "login" ? setBtnName("logout") : setBtnName("login")
          }
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
