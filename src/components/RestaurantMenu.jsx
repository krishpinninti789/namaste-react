import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">Loading menu...</h1>
        </div>
      </main>
    );
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
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm sm:p-8">
        <div className="border-b border-slate-200 pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Restaurant details
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            {restaurantInfo?.name}
          </h1>
          <p className="mt-3 text-base text-slate-600">
            <span className="mr-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
              ⭐ {restaurantInfo?.avgRating}
            </span>
            <span className="text-slate-500">
              {restaurantInfo?.costForTwoMessage}
            </span>
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-slate-900">Menu</h2>

          <div className="mt-5 space-y-4">
            {itemCards?.length ? (
              itemCards.map((item, index) => {
                const info = item.card.info;

                return (
                  <article
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {info.name}
                        </h3>
                        {info.description ? (
                          <p className="max-w-3xl text-sm leading-6 text-slate-500">
                            {info.description}
                          </p>
                        ) : null}
                      </div>

                      <p className="shrink-0 text-base font-semibold text-slate-900">
                        ₹
                        {((info.price || info.defaultPrice || 0) / 100).toFixed(
                          2,
                        )}
                      </p>
                    </div>
                  </article>
                );
              })
            ) : (
              <p className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
                No menu available.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RestaurantMenu;
