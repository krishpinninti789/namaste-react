import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";

import appStore from "../utils/appStore";

import "@testing-library/jest-dom";
import { Provider } from "react-redux";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  }),
);

it("Should test the restaurant menu", async () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter initialEntries={["/restaurant/123"]}>
        <Routes>
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  expect(await screen.findByText("Subway")).toBeInTheDocument();
});
