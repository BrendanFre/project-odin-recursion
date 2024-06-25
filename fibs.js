const { log } = require("console");

const fibNumber = 22; // The iteration of the Fibonacci sequence.

const fibs = (n) => {
  let arr = [];
  let previousprevious = 0;
  let previous = 0;
  let current = 1;
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      previousprevious = 0;
      previous = 0;
      current = 0;
    } else if (i == 1) {
      previousprevious = 0;
      previous = 0;
      current = 1;
    } else {
      current = previous + current;
      previousprevious = previous;
      previous = current - previous;
    }
    arr.push(current);
  }
  return arr;
};

const fibsRec = (n, arr = []) => {
  if (n == 1) {
    return [0];
  } else if (n == 2 && arr.length == 0) {
    return [0, 1];
  } else if (arr.length == 0) {
    return fibsRec(n - 1, [0, 1]);
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    fibsRec(n - 1, arr);
    return arr
  }

};

log(`Using Recursion, ${fibsRec(fibNumber)}`);

log(`Using Iteration, ${fibs(fibNumber)}`);
