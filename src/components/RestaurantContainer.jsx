import { useEffect, useState } from "react";
import { resList } from "../utils/resConfig";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

// Restaurant Container
const RestaurantContainer = () => {
  const [filteredRes, setFilteredRes] = useState([]);
  const handleFilterTopRated = () => {
    setFilteredRes(
      filteredRes.filter((resItem) => Number(resItem.avgRating) > 4.4),
    );
  };

  useEffect(() => {
    const fetchTopRestaurants = async () => {
      try {
        const response = await fetch(SWIGGY_API_URL);

        const json = await response.json();

        const restaurantCard = json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        );

        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ?? [];

        setFilteredRes(restaurants.map((restaurant) => restaurant.info));
      } catch (err) {
        console.error(err);
      }
    };

    fetchTopRestaurants();
  }, []);

  if (filteredRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="res-container">
      <button className="filter-btn" onClick={handleFilterTopRated}>
        Top rated Restaurants
      </button>
      {filteredRes.map((resCardData) => (
        <RestaurantCard resData={resCardData} key={resCardData.id} />
      ))}
    </div>
  );
};

export default RestaurantContainer;
