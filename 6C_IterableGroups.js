// Eloquent JavaScript
// Exercise 6C
// Iterable Groups

// Your code here (and the code from the previous exercise)
class Group {
  // Your code here.
  constructor (){
    this.members = [];
  }

  add(value) {
    if (this.members.indexOf(value) === -1) {
      this.members.push(value);
    }
  }

  delete(value) {
    let index = this.members.indexOf(value);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  has(value) {
    return this.members.indexOf(value) !== -1;
  }

  static from(iterableObj) {
    let members = new Group;
    for (let element of iterableObj) {
      members.add(element);
    }
    return members;
  }
}

class GroupIterator {
  constructor(group) {
    this.members = group.members;
    this.size = group.members.length;
    this.index = 0;
  }

  next() {
    if (this.index === this.size) {
      return {done: true};
    }

    let value = this.members[this.index];
    this.index++;
    return {value, done: false};
  }
}

// Set up Group as an iterator
Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}




for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
