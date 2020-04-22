// Eloquent JavaScript
// Exercise 4C
// A List

const arrayToList = arr => {
  let len = arr.length;

  let prevList = {
    value: arr[len - 1],
    rest: null
  };

  for (let i = len - 2; i >= 0; i--) {
    let newObj = {};
    newObj.value = arr[i];
    newObj.rest = prevList;
    prevList = newObj;
  }
  return prevList;
};

const listToArray = list => {
  let nextList = list;
  let newArr = [];

  while (nextList.rest !== null) {
    newArr.push(nextList.value);
    nextList = nextList.rest;
  }

  // add last value
  newArr.push(nextList.value);
  return newArr;
};

const prepend = (item, list) => {
  return {
    value: item,
    rest: list
  };
};

const nth = (list, index) => {
  let myArr = listToArray(list);
  return myArr[index];
};


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
