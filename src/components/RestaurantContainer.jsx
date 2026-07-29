import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../hooks/useRestaurants";

const RestaurantContainer = () => {
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { restaurants, loading } = useRestaurants();

  useEffect(() => {
    setFilteredRes(restaurants);
  }, [restaurants]);

  const handleSearch = (value) => {
    setFilteredRes(
      restaurants.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()),
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
    return (
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">
          No restaurants found
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Try again in a moment or refresh the page.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Discover food
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Restaurants near you
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
              Search for your favorite restaurant, then filter top-rated places
              with one click.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-sm sm:w-80"
              placeholder="Search restaurant"
              onChange={(e) => {
                const value = e.target.value;
                setSearchInput(value);
                handleSearch(value);
              }}
              value={searchInput}
            />
            <button
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              onClick={handleFilterTopRated}
            >
              Top rated
            </button>
          </div>
        </div>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredRes.map((resCardData) => (
          <Link to={"/restaurantMenu/" + resCardData.id} key={resCardData.id}>
            <RestaurantCard resData={resCardData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
