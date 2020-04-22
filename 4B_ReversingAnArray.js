// Eloquent JavaScript
// Exercise 4B
// Reversing an Array

const reverseArray = arr => {
  let myArr = arr.slice();
  let newArr = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    newArr.push(myArr.pop());
  }
  return newArr;
};

const reverseArrayInPlace = arr => {
  let len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
  return arr;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
