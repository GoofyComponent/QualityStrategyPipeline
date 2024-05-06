function subtraction(a, b) {
  return a - b;
}

test("subtracts 3 - 1 to equal 2", () => {
  expect(subtraction(3, 1)).toBe(2);
});
