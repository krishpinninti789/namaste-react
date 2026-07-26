import React, { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchTopRestaurants();
  }, []);
  const fetchTopRestaurants = async () => {
    setLoading(true);
    try {
      const response = await fetch(SWIGGY_API_URL);

      const json = await response.json();

      const restaurantCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ??
        [];

      setRestaurants(restaurants.map((restaurant) => restaurant.info));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  return { restaurants, loading };
};

export default useRestaurants;
