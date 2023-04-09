import LinkedList from './linked lists.js';

const test = new LinkedList();
//console.log(test);
test.append('first');
//console.log(test);
test.append('second');
//console.log(test);
test.append('third');
//console.log(test);
test.prepend('fourth');
console.log(test);
// console.log(test.getSize());
// console.log(test.getHead());
console.log(test.getTail());
// console.log(test.getNodeAt(1));
test.pop();
console.log(test);
