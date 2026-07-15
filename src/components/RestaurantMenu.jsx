import React, { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=10892&submitAction=ENTER",
      );
      const json = await response.json();
      console.log(json?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards);
      setRestaurantData(json?.data?.cards?.[2]?.card?.card?.info);
      setMenuData(json?.data?.cards[5]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>{restaurantData.name}</h1>
      <h2>{restaurantData.avgRating}</h2>
      <h1>Menu</h1>
    </div>
  );
};

export default RestaurantMenu;
