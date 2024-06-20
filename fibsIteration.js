const fibsIteration = (n) => {
  let arr = [];
  let previousPreviousNumber;
  let previousNumber = 0;
  let currentNumber = 1;
  for (let index = 0; index < n; index++) {
    arr.push(currentNumber);
    previousPreviousNumber = previousNumber;
    previousNumber = currentNumber;
    currentNumber = previousPreviousNumber + previousNumber;
  }
  return arr;
};

console.log(fibsIteration(3));
