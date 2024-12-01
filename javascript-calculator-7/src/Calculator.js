class Calculator {
  sum(input) {
    if (input === '') return 0;

    if (input.startsWith('//')) {
      const customDelimiter = input.split('\n')[0].substring(2);
      const inputNums = input.split('\n')[1];

      return this.calculate(customDelimiter, inputNums);
    }

    return this.calculate(/,|:/, input);
  }

  calculate(delimiter, inputNumbers) {
    return inputNumbers
      .split(delimiter)
      .map(Number)
      .reduce(
        (previousValue, currentNumbers) => previousValue + currentNumbers,
        0,
      );
  }
}

export default Calculator;
