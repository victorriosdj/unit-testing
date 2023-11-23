function resta(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "datos inválidos";
    }
    return num1 - num2;
}