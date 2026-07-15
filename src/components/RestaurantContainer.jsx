import { useEffect, useState } from "react";
import { resList } from "../utils/resConfig";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// Restaurant Container
const RestaurantContainer = () => {
  const [filteredRes, setFilteredRes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

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
  useEffect(() => {
    const fetchTopRestaurants = async () => {
      setLoading(true);
      try {
        const response = await fetch(SWIGGY_API_URL);

        const json = await response.json();

        const restaurantCard = json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        );

        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ?? [];

        setRestaurants(restaurants.map((restaurant) => restaurant.info));
        setFilteredRes(restaurants.map((restaurant) => restaurant.info));
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchTopRestaurants();
  }, []);

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
          <Link to={"/restaurantMenu/" + resCardData.id}>
            <RestaurantCard resData={resCardData} key={resCardData.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
