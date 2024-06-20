const mergedSort = (arr) => {
  if (arr.length == 1) {
    return arr;
  } else {
    const half = Math.ceil(arr.length / 2);
    const firstArray = arr.slice(0, half);
    const secondArray = arr.slice(half);
    let sorted = mergePair(mergedSort(firstArray), mergedSort(secondArray));
    return sorted;
  }
};
const mergePair = (firstHalf, secondHalf) => {
  const newArray = [];
  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] < secondHalf[0]) {
      newArray.push(firstHalf.shift());
    } else {
      newArray.push(secondHalf.shift());
    }
  }
  return newArray.concat(firstHalf).concat(secondHalf);
};

let array1 = [3, 1, 5, 2, 1];

console.log("|======List: 1=============|");
console.log(mergedSort([1]));

console.log("|======List: 3, 1==========|");
console.log(mergedSort([3, 1]));

console.log("|======List: 3, 1, 5========|");
console.log(mergedSort([3, 1, 5]));

console.log("|======List: 3, 1, 5, 2========|");
console.log(mergedSort(array1));
