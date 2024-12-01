import { Console } from '@woowacourse/mission-utils';

class Calculator {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    const result = this.sum(input);
    Console.print(`결과 : ${result}`);
  }

  sum(input) {
    if (input === '') return 0;

    if (input.startsWith('//')) {
      const customDelimiter = input.split('\\n')[0].substring(2);
      const inputNums = input.split('\\n')[1];

      const escapedDelimiter = this.escapeRegExp(customDelimiter);
      return this.calculate(escapedDelimiter, inputNums);
    }

    return this.calculate(/,|:/, input);
  }

  calculate(delimiter, inputNumbers) {
    const delimiterRegExp = new RegExp(delimiter);
    const numbers = inputNumbers.split(delimiterRegExp).map(Number);

    this.validate(numbers);

    return numbers.reduce(
      (previousValue, currentNumbers) => previousValue + currentNumbers,
      0,
    );
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  validate(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0)
        throw new Error('[ERROR] 입력 값은 음수일 수 없습니다.');
    }
  }
}

export default Calculator;
