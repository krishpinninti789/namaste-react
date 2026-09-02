import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurantMock.json";
import "@testing-library/jest-dom";
import Shimmer from "../components/Shimmer";

test("Should render restaurant card with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("McDonald's");

  expect(restaurantName).toBeInTheDocument();
});

test("Should shimmers are loading", () => {
  render(<Shimmer />);

  const shimmerDataId = screen.getByTestId("shimmer");

  expect(shimmerDataId).toBeInTheDocument();
});
