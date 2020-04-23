// Eloquent JavaScript
// Exercise 5D
// Dominant writing direction
// NB: Some parts of this code were already in the Eloquent JavaScript sandbox and not included here

function dominantDirection(text) {
  // Your code here.

  // Obtain scripts for each character
  let scripts = [];
  let len = text.length;
  for (let i  = 0; i < len; i++) {
    let code = text.charCodeAt(i);
    let charScript = characterScript(code);
    scripts.push(charScript);
  }

  // Count number of scripts related to each direction
  let count = countBy(scripts, script => {
    if (script) {
      if (script.direction === "ltr") {
        return "ltr";
      } else if (script.direction === "rtl") {
        return "rtl";
      } else {
        return "ttb";
      }
    }
  });

  // find dominant direction
  let dominant = count.reduce((acc,val) => {
    if (val && acc) {
      return acc.count > val.count ? acc : val;
    }
  });

  return (dominant.name);
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
