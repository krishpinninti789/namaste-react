import { act, render } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resDataResponseMock.json";
import { BrowserRouter } from "react-router-dom";

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
});
