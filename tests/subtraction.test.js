// Dans votre fichier de test (par exemple subtraction.test.js)
import { test, expect } from "@jest/globals"; // Importez la fonction `test` de Jest

function subtraction(a, b) {
  return a - b;
}

test("subtracts 3 - 1 to equal 2", () => {
  expect(subtraction(3, 1)).toBe(2);
});
