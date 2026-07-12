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
const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = props.resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={cloudinaryImageId} alt="Restaurant" />

      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>${costForTwo} mins</h4>
    </div>
  );
};

const resList = [
  {
    id: "1",
    name: "Meghana Foods",
    cloudinaryImageId:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4f54df9e87c98ab5f253c6f8c2b7f2b",
    cuisines: ["Biryani", "Andhra", "North Indian"],
    avgRating: "4.5",
    costForTwo: "₹400 for two",
    deliveryTime: 35,
  },
  {
    id: "2",
    name: "Pizza Hut",
    cloudinaryImageId:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cuisines: ["Pizza", "Italian"],
    avgRating: "4.3",
    costForTwo: "₹600 for two",
    deliveryTime: 30,
  },
  {
    id: "3",
    name: "Burger King",
    cloudinaryImageId:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cuisines: ["Burgers", "Fast Food"],
    avgRating: "4.2",
    costForTwo: "₹350 for two",
    deliveryTime: 25,
  },
  {
    id: "4",
    name: "KFC",
    cloudinaryImageId:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
    cuisines: ["Chicken", "Burgers"],
    avgRating: "4.1",
    costForTwo: "₹500 for two",
    deliveryTime: 28,
  },
  {
    id: "5",
    name: "Domino's Pizza",
    cloudinaryImageId:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f8c9ffa8f9f37d2f0f8f9a27d69cb3b4",
    cuisines: ["Pizza", "Desserts"],
    avgRating: "4.4",
    costForTwo: "₹450 for two",
    deliveryTime: 32,
  },
  {
    id: "6",
    name: "A2B - Adyar Ananda Bhavan",
    cloudinaryImageId:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/94654fdf308764d787c0c205b28f5c7a",
    cuisines: ["South Indian", "Sweets"],
    avgRating: "4.6",
    costForTwo: "₹300 for two",
    deliveryTime: 20,
  },
];
// Restaurant Container
const RestaurantContainer = () => {
  return (
    <div className="res-container">
      {resList.map((resCardData) => (
        <RestaurantCard resData={resCardData} key={resCardData.id} />
      ))}
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
