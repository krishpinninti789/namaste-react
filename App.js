import React from "react";
import ReactDOM from "react-dom/client";

// Header Components
const Logo = () => (
  <img
    className="logo"
    src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
    alt="logo"
    width="70"
  />
);

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

// Restaurant Card
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500"
        alt="Restaurant"
      />

      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian</h4>
      <h4>4.5 ⭐</h4>
      <h4>38 mins</h4>
    </div>
  );
};

// Restaurant Container
const RestaurantContainer = () => {
  return (
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

// Body
const Body = () => {
  return (
    <div className="body">
      <RestaurantContainer />
    </div>
  );
};

// App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
