const chickenRescued = require("./chickenRescued");

describe("chickenRescued", () => {
  test("returns 'Invalid chicken position' when chicken positions exceed the number of chickens", () => {
    expect(chickenRescued([3, 5], [1, 2, 3, 4])).toBe(
      "Invalid chicken position"
    );
  });

  test(" Example 1", () => {
    expect(chickenRescued([5, 5], [2, 5, 10, 12, 15])).toBe(2);
  });

  test("Example 2", () => {
    expect(chickenRescued([6, 10], [1, 11, 30, 34, 35, 37])).toBe(4);
  });

  test("Edge case with one chicken", () => {
    expect(chickenRescued([1, 10], [5])).toBe(1);
  });

  test("All chickens within roof length", () => {
    expect(chickenRescued([3, 5], [1, 2, 3])).toBe(3);
  });

  test("No chickens within roof length", () => {
    expect(chickenRescued([3, 2], [1, 4, 7])).toBe(1);
  });

  test("Large gap between chickens", () => {
    expect(chickenRescued([5, 15], [5, 10, 20, 30, 50])).toBe(2);
  });

  test("Multiple optimal positions", () => {
    expect(chickenRescued([6, 10], [1, 2, 9, 11, 15, 20])).toBe(3);
  });
});
