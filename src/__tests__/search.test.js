import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resDataResponseMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the search component in Body", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });

  screen.debug();

  const cards = await screen.findAllByTestId("resCardData");

  console.log(cards.length);

  const searchText = screen.getByText("Search");
  expect(searchText).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  const searchButton = screen.getByTestId("searchButton");

  fireEvent.change(searchInput, { target: { value: "biryani" } });

  fireEvent.click(searchButton);
});
