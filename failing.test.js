const { add, subtract, multiply, divide, isEven, factorial } = require('./math');

describe('Failing Tests (5 tests that will 100% fail)', () => {
  
  // Тест 1: Неправильное ожидание для сложения
  test('should fail with wrong addition expectation', () => {
    expect(add(2, 3)).toBe(10); // Ожидаем 10, но получим 5
  });

  // Тест 2: Неправильное ожидание для вычитания
  test('should fail with wrong subtraction expectation', () => {
    expect(subtract(10, 3)).toBe(0); // Ожидаем 0, но получим 7
  });

  // Тест 3: Проверка на исключение, которое не будет выброшено
  test('should fail when expecting division by zero error but not dividing by zero', () => {
    expect(() => divide(10, 2)).toThrow('Division by zero'); // Исключения не будет
  });

  // Тест 4: Неправильная проверка на четность
  test('should fail with incorrect even number check', () => {
    expect(isEven(2)).toBe(false); // 2 четное, но ожидаем false
    expect(isEven(3)).toBe(true);  // 3 нечетное, но ожидаем true
  });

  // Тест 5: Неправильный факториал
  test('should fail with wrong factorial calculation', () => {
    expect(factorial(3)).toBe(10); // Ожидаем 10, но получим 6
    expect(factorial(0)).toBe(0);  // Ожидаем 0, но получим 1
  });
});
