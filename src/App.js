import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Loading from "./components/Loading";

// App Layout
const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
