// Простые математические функции для тестирования

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function isEven(n) {
  return n % 2 === 0;
}

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  isEven,
  factorial
};
