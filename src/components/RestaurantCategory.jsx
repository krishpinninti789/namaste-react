import { ArrowDown } from "lucide-react";
import React, { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data }) => {
  const [showSection, setShowSection] = useState(true);
  const handleExpandSection = () => {
    setShowSection(!showSection);
  };
  return (
    <div className="m-2 bg-gray-200 p-6 rounded-lg shadow-md">
      <div className="flex justify-between" onClick={handleExpandSection}>
        <h1 className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </h1>
        <span>
          <ArrowDown />
        </span>
      </div>

      {showSection
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
