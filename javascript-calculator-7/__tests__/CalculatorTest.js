import Calculator from '../src/Calculator.js';

describe('Calculator class', () => {
  test('sum() - 기본 구분자 테스트', () => {
    const calculator = new Calculator();

    expect(calculator.sum('')).toBe(0);
    expect(calculator.sum('1,2')).toBe(3);
    expect(calculator.sum('1,2,3')).toBe(6);
    expect(calculator.sum('1,2:3')).toBe(6);
  });
});
