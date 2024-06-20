const mergedSort = (arr) => {
  if (arr.length == 2) {
    if (arr[0] > arr[1]) {
      return [arr[1], arr[0]];
    } else {
      return arr;
    }
  } else if (arr.length == 1) {
    return arr;
  } else {
    let arrayOne = arr.slice(0, arr.length / 2 + 1);
    let arrayTwo = arr.slice(arr.length / 2 + 1, arr.length);
    console.log(`Array One: ${arrayOne}`);
    console.log(`Array Two: ${arrayTwo}`);
    arrayOne = mergedSort(arrayOne);
    arrayTwo = mergedSort(arrayTwo);
    console.log(`Sorted Array One: ${arrayOne}`);
    console.log(`Sorted Array Two: ${arrayTwo}`);
    let arrayThree = arrayOne.concat(arrayTwo);
    console.log(`Merged Array: ${arrayThree}`);
    return arrayThree;
  }
};

console.log("|======List: 1=============|");
console.log(mergedSort([1]));

console.log("|======List: 3, 1==========|");
console.log(mergedSort([3, 1]));

console.log("|======List: 3, 1, 5========|");
console.log(mergedSort([3, 1, 5]));

console.log("|======List: 3, 1, 5, 2========|");
console.log(mergedSort([3, 1, 5, 2, 1]));
