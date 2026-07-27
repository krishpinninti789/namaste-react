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
  const imageSrc = cloudinaryImageId?.startsWith("http")
    ? cloudinaryImageId
    : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <img
        className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
        src={imageSrc}
        alt={name}
      />

      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
            {avgRating} ⭐
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            {deliveryTime} mins
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            {costForTwo}
          </span>
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;
