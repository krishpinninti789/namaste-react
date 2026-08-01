import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/reduxSlices/cartSlice";

const ItemCard = ({ itemData }) => {
  if (!itemData) return null;

  const {
    name,
    description,
    category,
    defaultPrice,
    finalPrice,
    imageId,
    itemAttribute,
    ratings,
    inStock,
  } = itemData;

  const dispatch = useDispatch();

  const rating = ratings?.aggregatedRating?.rating;
  const ratingCount = ratings?.aggregatedRating?.ratingCountV2;
  const vegType = itemAttribute?.vegClassifier;
  const isNonVeg = vegType === "NONVEG";

  const formatPrice = (price) =>
    typeof price === "number" ? `₹${(price / 100).toFixed(0)}` : null;

  const handleAddItemToCart = (itemData) => {
    dispatch(addItem(itemData));
  };

  return (
    <div className="flex w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Left Section */}
      <div className="w-72 shrink-0">
        <div className="relative">
          <img
            src={
              imageId
                ? `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`
                : "https://via.placeholder.com/400x300?text=Food"
            }
            alt={name}
            className="h-48 w-full object-cover"
          />

          {/* Veg / Non Veg */}
          <div className="absolute left-3 top-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                isNonVeg ? "bg-red-500" : "bg-green-600"
              }`}
            >
              {vegType || "ITEM"}
            </span>
          </div>

          {/* Rating */}
          {rating && (
            <div className="absolute bottom-3 right-3 rounded-lg bg-white/95 px-2 py-1 shadow">
              <span className="text-sm font-semibold text-green-700">
                ⭐ {rating}
              </span>
            </div>
          )}

          {/* Out of Stock */}
          {!inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="border-t bg-gray-50 px-5 py-4">
          <div className="flex items-center gap-2">
            {finalPrice ? (
              <>
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(finalPrice)}
                </span>

                {defaultPrice && (
                  <span className="text-base text-gray-400 line-through">
                    {formatPrice(defaultPrice)}
                  </span>
                )}
              </>
            ) : (
              <span className="text-2xl font-bold text-gray-900">
                {formatPrice(defaultPrice)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Name */}
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>

          {/* Category */}
          {category && (
            <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              {category}
            </span>
          )}

          {/* Description */}
          {description && (
            <p className="mt-4 line-clamp-4 text-base leading-7 text-gray-600">
              {description}
            </p>
          )}

          {/* Add Button */}
          <button
            disabled={!inStock}
            className={`mt-6 rounded-xl px-8 py-3 text-sm font-semibold transition cursor-pointer ${
              inStock
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "cursor-not-allowed bg-gray-300 text-gray-600"
            }`}
            onClick={() => handleAddItemToCart(itemData)}
          >
            {inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t pt-4 text-sm text-gray-500">
          {ratingCount ? (
            <span>{ratingCount} ratings</span>
          ) : (
            <span>No ratings yet</span>
          )}

          <span
            className={`font-medium ${
              inStock ? "text-green-600" : "text-red-500"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
