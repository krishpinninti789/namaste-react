import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const { resId } = useParams();

  const { restaurantData } = useRestaurantMenu(resId);

  return (
    <div>
      <h1>{restaurantData.name}</h1>
      <h2>{restaurantData.avgRating}</h2>
      <h1>Menu</h1>
    </div>
  );
};

export default RestaurantMenu;
