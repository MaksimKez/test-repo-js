const { add, subtract, multiply, divide, isEven, factorial } = require('./math');

describe('Passing Tests (5 tests that will 100% pass)', () => {
  
  // Тест 1: Сложение положительных чисел
  test('should add two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 20)).toBe(30);
    expect(add(0, 5)).toBe(5);
  });

  // Тест 2: Вычитание
  test('should subtract numbers correctly', () => {
    expect(subtract(10, 3)).toBe(7);
    expect(subtract(5, 5)).toBe(0);
    expect(subtract(0, 10)).toBe(-10);
  });

  // Тест 3: Умножение
  test('should multiply numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(-2, 3)).toBe(-6);
  });

  // Тест 4: Проверка четных чисел
  test('should correctly identify even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
  });

  // Тест 5: Факториал
  test('should calculate factorial correctly', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
  });
});
