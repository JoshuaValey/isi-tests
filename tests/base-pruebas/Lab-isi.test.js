import { divicion, multiplicacion, resta, suma } from "../../src/base-pruebas/Lab-isi";

describe("Pruebas de funciones para LAB ISI", () => {
  test("suma debe retornar 10", () => {
    const num1 = 7;
    const num2 = 3;
    const result = suma(num1, num2);

    expect(10).toBe(result);
  });
  test("resta debe retornar 4", () => {
    const num1 = 7;
    const num2 = 3;
    const result = resta(num1, num2);

    expect(4).toBe(result);
  });
  test("multiplicacion debe retornar 100", () => {
    const num1 =10;
    const num2 =10;
    const result = multiplicacion(num1, num2);

    expect(100).toBe(result);
  });
  test("divicion debe retornar 10", () => {
    const num1 = 100;
    const num2 = 10;
    const result = divicion(num1, num2);

    expect(10).toBe(result);
  });
});
