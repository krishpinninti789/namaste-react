import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (!resId) return;

    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=${resId}&submitAction=ENTER`,
      );

      const json = await response.json();
      console.log(json.data);

      setResInfo(json?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
