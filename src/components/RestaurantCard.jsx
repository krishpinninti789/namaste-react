// Restaurant Card
const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = props?.resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={cloudinaryImageId} alt="Restaurant" />

      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>${costForTwo} mins</h4>
    </div>
  );
};

export default RestaurantCard;
