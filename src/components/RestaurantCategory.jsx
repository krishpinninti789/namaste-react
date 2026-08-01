import { ArrowDown } from "lucide-react";
import React, { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data, showIndex, handleSetExpanded }) => {
  return (
    <div className="m-2 bg-gray-200 p-6 rounded-lg shadow-md cursor-pointer">
      <div className="flex justify-between" onClick={handleSetExpanded}>
        <h1 className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </h1>
        <span>
          <ArrowDown />
        </span>
      </div>

      {showIndex
        ? data.itemCards.map((card, index) => (
            <div className="py-3" key={index}>
              <ItemCard itemData={card?.card?.info} />
            </div>
          ))
        : null}
    </div>
  );
};

export default RestaurantCategory;
