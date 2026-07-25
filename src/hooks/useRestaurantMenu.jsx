import React, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=" +
          resId +
          "&submitAction=ENTER",
      );
      const json = await response.json();
      setResInfo(json?.data?.cards[5]);
    } catch (error) {
      console.log(error);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
