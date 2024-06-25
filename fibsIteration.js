const { log } = require("console");

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

log(fibs(8));
