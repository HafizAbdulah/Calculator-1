function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero.";
    }
    return a / b;
}

module.exports = {
    add,
    sub,
    multiply,
    divide,
};