test("0 - (-5) should be 5", () => {
    
    const result = resta(0, -5);
    // test
    expect(result).toBe(5);
});

test("si uno de los operandos es cero, el resultado debería ser el otro operando", () => {
    
    const result1 = resta(0, 10);
    const result2 = resta(20, 0);
    // test
    expect(result1).toBe(10);
    expect(result2).toBe(20);
});