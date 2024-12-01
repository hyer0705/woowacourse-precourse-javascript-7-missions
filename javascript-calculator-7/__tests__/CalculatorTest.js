import Calculator from '../src/Calculator.js';

describe('Calculator class', () => {
  test('sum() - 기본 구분자 테스트', () => {
    const calculator = new Calculator();

    expect(calculator.sum('')).toBe(0);
    expect(calculator.sum('1,2')).toBe(3);
    expect(calculator.sum('1,2,3')).toBe(6);
    expect(calculator.sum('1,2:3')).toBe(6);
  });

  test('sum() - 커스텀 구분자 테스트', () => {
    const calculator = new Calculator();

    expect(calculator.sum('//;\\n1;2;3')).toBe(6);
    expect(calculator.sum('//;\\n1')).toBe(1);
  });

  test('sum() - 사용자가 잘못된 값을 입력한 경우 테스트', () => {
    const calculator = new Calculator();

    expect(() => calculator.sum('1,-2,3')).toThrow();
    expect(() => calculator.sum('1,-,3')).toThrow();
  });
});
