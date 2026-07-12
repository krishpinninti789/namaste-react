import { useState } from "react";
import { resList } from "../utils/resConfig";
import RestaurantCard from "./RestaurantCard";

// Restaurant Container
const RestaurantContainer = () => {
  const [filteredRes, setFilteredRes] = useState(resList);
  const handleFilterTopRated = () => {
    setFilteredRes(
      filteredRes.filter((resItem) => Number(resItem.avgRating) > 4.4),
    );
  };
  console.log(filteredRes);
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
