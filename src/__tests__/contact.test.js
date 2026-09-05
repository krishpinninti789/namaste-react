import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

describe("Test cases of the contact us component", () => {
  beforeAll(() => {
    console.log("This is before running all test cases");
  });

  beforeEach(() => {
    console.log("This is before running each test case");
  });

  test("Contact us component loaded", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should be have two input boxes", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });

  afterAll(() => {
    console.log("This is after running all test cases");
  });

  afterEach(() => {
    console.log("This is after running each test case");
  });
});
