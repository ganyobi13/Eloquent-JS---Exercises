// Eloquent JavaScript
// Exercise 4A
// The Sum of a Range

const range = (start, end, step = 1) => {
  let arr = [];
  // check for negative step
  if (step >= 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}


const sum = arr => {
  return arr.reduce((acc, val) => acc + val);
}




console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
