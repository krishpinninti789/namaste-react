import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <h1>Loading...</h1>;
  }

  // Restaurant Details
  const restaurantInfo = resInfo?.cards
    ?.map((card) => card?.card?.card?.info)
    ?.find(Boolean);

  // Regular menu cards
  const regularCards = resInfo?.cards?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // Item cards
  const itemCards = regularCards
    ?.filter((card) => card?.card?.card?.itemCards)
    ?.flatMap((card) => card?.card?.card?.itemCards);

  return (
    <div className="restaurant-menu">
      <h1>{restaurantInfo?.name}</h1>

      <p>
        ⭐ {restaurantInfo?.avgRating} • {restaurantInfo?.costForTwoMessage}
      </p>

      <h2>Menu</h2>

      {itemCards?.length ? (
        itemCards.map((item, index) => {
          const info = item.card.info;

          return (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "10px 0",
              }}
            >
              <h3>{info.name}</h3>

              <p>₹{(info.price || info.defaultPrice || 0) / 100}</p>

              <p>{info.description}</p>
            </div>
          );
        })
      ) : (
        <p>No menu available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
