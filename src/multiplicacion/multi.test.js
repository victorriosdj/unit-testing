// Importa la función de multiplicación
const multiplicar = require("./multiplicar");

// Multiplicación de dos números positivos
test("Multiplicar 3 por 4 debería dar 12", () => {
    // Sujeto de prueba
    const result = multiplicar(3, 4);
    // Test
    expect(result).toBe(12);
});

//  Multiplicación de un número positivo por cero
test("Multiplicar 5 por 0 debería dar 0", () => {
    // Sujeto de prueba
    const result = multiplicar(5, 0);
    // Test
    expect(result).toBe(0);
});

//  Multiplicación de un número negativo por un número positivo
test("Multiplicar -2 por 6 debería dar -12", () => {
    // Sujeto de prueba
    const result = multiplicar(-2, 6);
    // Test
    expect(result).toBe(-12);
});

//  Multiplicación de dos números negativos
test("Multiplicar -3 por -5 debería dar 15", () => {
    // Sujeto de prueba
    const result = multiplicar(-3, -5);
    // Test
    expect(result).toBe(15);
});