// Eloquent JavaScript
// Exercise 5A
// Flattening

let arrays = [[1, 2, 3], [4, 5], [6]];
let newArr = arrays.reduce((accArr, curArr) => accArr.concat(curArr), []);


console.log(newArr);
// → [1, 2, 3, 4, 5, 6]
