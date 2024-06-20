const fibsRecursion = (n) => {
  let arr = [];
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    arr = fibsRecursion(n - 1);
    console.log(arr[arr.length - 1]);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

console.log(fibsRecursion(10));
