import Node from './node.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    let check = this.head;
    if (check == null) {
      this.head = node.value;
    } else {
      while (this[check] != null) {
        check = this[check];
      }
      this[check] = node.value;
    }
    this[node.value] = node.next;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node.value;
    } else {
      node.next = this.head;
      this.head = node.value;
      this[node.value] = node.next;
    }
  }

  size() {
    let check = this.head;
    if (check == null) {
      return 0;
    } else {
      let counter = 1;
      while (this[check] != null) {
        check = this[check];
        counter += 1;
      }
      return counter;
    }
  }
}

export default LinkedList;
