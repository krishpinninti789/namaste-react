import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />

      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
