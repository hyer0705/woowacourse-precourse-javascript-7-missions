import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE_PREFIX, ERROR_MESSAGES } from './constants/ErrorMessage';

class Calculator {
  static CUSTOM_DELIMITER_PREFIX = '//';
  static CUSTOM_DELIMITER_SUFFIX = '\\n';

  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    const result = this.sum(input);
    Console.print(`결과 : ${result}`);
  }

  sum(input) {
    if (input === '') return 0;

    if (input.startsWith(Calculator.CUSTOM_DELIMITER_PREFIX)) {
      const customDelimiter = input
        .split(Calculator.CUSTOM_DELIMITER_SUFFIX)[0]
        .substring(2);
      const inputNums = input.split(Calculator.CUSTOM_DELIMITER_SUFFIX)[1];

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
      if (Number.isNaN(numbers[i]))
        throw new Error(`${ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.notANumber}`);
      if (numbers[i] < 0)
        throw new Error(
          `${ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.notPositive}`,
        );
    }
  }
}

export default Calculator;
