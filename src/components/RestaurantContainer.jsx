import { resList } from "../utils/resConfig";
import RestaurantCard from "./RestaurantCard";

// Restaurant Container
const RestaurantContainer = () => {
  return (
    <div className="res-container">
      {resList.map((resCardData) => (
        <RestaurantCard resData={resCardData} key={resCardData.id} />
      ))}
    </div>
  );
};

export default RestaurantContainer;
