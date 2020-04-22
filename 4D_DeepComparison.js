// Eloquent JavaScript
// Exercise 4D
// Deep Comparison

const deepEqual = (a, b) => {
  // test for non-object values
  if (typeof(a) !== 'object' || typeof(b) !== 'object') {
    return a === b;
  }

  // test for object values
  if (a === null || b === null) {
    return false;
  }
  // check for identical properties
  let propA = Object.keys(a);
  let propB = Object.keys(b);
  if (propA.length !== propB.length) {
    return false;
  } else {
    let len = propA.length;
    for (let i = 0; i < len; i++) {
      if (!(deepEqual(propA[i], propB[i]) && deepEqual(a[propA[i]], b[propB[i]]))) {
        return false;
      }
    }
    return true;
  }
};



let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
