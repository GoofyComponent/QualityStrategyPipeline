// math.test.js
describe("Tests for math functions", () => {
  const addition = (a, b) => a + b;
  const soustraction = (a, b) => a - b;

  test("addition 1 + 2 to equal 3", () => {
    expect(addition(1, 2)).toBe(3);
  });

  test("soustraction 5 - 2 to equal 3", () => {
    expect(soustraction(5, 2)).toBe(3);
  });

  test("addition 1 + 2 to not equal 4", () => {
    expect(addition(1, 2)).not.toBe(4);
  });

});
