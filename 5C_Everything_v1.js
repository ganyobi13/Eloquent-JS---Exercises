// Eloquent JavaScript
// Exercise 5C
// Everything
// (v.1) using loop

function every(array, test) {
  // Your code here.
  let len = array.length;
  for(let i = 0; i < len; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
