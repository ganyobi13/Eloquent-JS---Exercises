// Eloquent JavaScript
// Exercise 6B
// Groups

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

    static from(value) {
      let [start, end] = value;
      let members = new Group;
      for (let i = start; i <= end; i++) {
        members.add(i);
      }
      return members;
    }

}




let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
