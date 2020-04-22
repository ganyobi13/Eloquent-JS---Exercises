// Eloquent JavaScript
// Exercise 2C
// Bean Counting

const countChar = (str, char) => {
  let size = str.length;
  let count = 0;
  for (let i = 0; i < size; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));
// → 4
