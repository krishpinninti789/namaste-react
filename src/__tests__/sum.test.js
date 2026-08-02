import { sum } from "../components/sum";

test("Sum is a function that gives  added result", () => {
  const result = sum(3, 4);
  expect(result).toBe(9);
});
