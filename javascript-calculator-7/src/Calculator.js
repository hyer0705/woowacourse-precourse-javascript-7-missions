class Calculator {
  sum(input) {
    if (input === '') return 0;

    const nums = input.split(/,|:/).map(Number);
    const totalSum = nums.reduce(
      (previousValue, currentNum) => previousValue + currentNum,
      0,
    );

    return totalSum;
  }
}

export default Calculator;
