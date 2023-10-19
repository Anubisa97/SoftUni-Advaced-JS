class List {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  add(num) {
    this.list.push(num);
    this.list.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    const listLength = this.list.length;
    if (this.list[index] === undefined) {
      throw "Invalid Index";
    }
    this.list.splice(index, 1);
    this.list.sort((a, b) => a - b);
    this.size--;
  }

  get(index) {
    const listLength = this.list.length;
    if (this.list[index] === undefined) {
      throw "Invalid Index";
    }
    return this.list[index];
  }
}
let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));

list.add(5);
// expect(myList.get(0)).to.equal(5, "Element wasn't added");

list.add(3);
// expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");

list.remove(0);
console.log(list.get(0));
console.log(list.size);

// expect(myList.get(0)).to.equal(5, "Element wasn't removed");
// expect(myList.size).to.equal(1, "Element wasn't removed");
