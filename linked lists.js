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

  getSize() {
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

  getHead() {
    let message = 'List is empty.';
    if (this.head != null) {
      message = this.head;
    }
    return message;
  }

  getTail() {
    let message = 'List is empty.';
    if (this.head != null) {
      let check = this.head;
      do {
        check = this[check];
      } while (this[check] != null);
      message = check;
    }
    return message;
  }

  getNodeAt(index) {
    let message = 'List is empty.';
    if (this.head != null) {
      if (this.getSize() < index) {
        message = 'This list too short';
      } else {
        let counter = 0;
        let check = this.head;
        while (counter < index - 1) {
          check = this[check];
          counter += 1;
        }
        message = check;
      }
    }
    return message;
  }

  pop() {
    const length = this.getSize();
    delete this[this.getTail()];
    this[this.getNodeAt(length - 1)] = null;
  }
}

export default LinkedList;
