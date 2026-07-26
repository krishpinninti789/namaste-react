import { useEffect, useState } from "react";
import { resList } from "../utils/resConfig";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../hooks/useRestaurants";

// Restaurant Container
const RestaurantContainer = () => {
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { restaurants, loading } = useRestaurants();

  useEffect(() => {
    setFilteredRes(restaurants);
  }, [restaurants]);

  const handleSearch = () => {
    setFilteredRes(
      restaurants.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()),
      ),
    );
  };
  const handleFilterTopRated = () => {
    setFilteredRes(
      restaurants.filter((resItem) => Number(resItem.avgRating) > 4.4),
    );
  };

  if (loading) {
    return <Shimmer />;
  }

  if (restaurants.length === 0) {
    return <h1>No Items found</h1>;
  }

  return (
    <div>
      <button className="filter-btn" onClick={handleFilterTopRated}>
        Top rated Restaurants
      </button>
      <input
        className="search-input"
        placeholder="search restaurant"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="res-container">
        {filteredRes.map((resCardData) => (
          <Link to={"/restaurantMenu/" + resCardData.id} key={resCardData.id}>
            <RestaurantCard resData={resCardData} key={resCardData.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
