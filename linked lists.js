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
}

export default LinkedList;
