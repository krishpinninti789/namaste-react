import { ArrowDown } from "lucide-react";
import React from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="m-2 bg-gray-200 p-6 rounded-lg shadow-md">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </h1>
        <span>
          <ArrowDown />
        </span>
      </div>

      {data.itemCards.map((card, index) => {
        return (
          <div className="py-3">
            <ItemCard itemData={card?.card?.info} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCategory;
