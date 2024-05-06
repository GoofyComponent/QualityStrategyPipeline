// Dans votre fichier de test (par exemple addition.test.js)
import { test, expect } from "@jest/globals"; // Importez la fonction `test` de Jest

function addition(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(addition(1, 2)).toBe(3);
});
