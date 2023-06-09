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
    if (this.head == null) {
      return 'List is empty.';
    } else {
      return this.head;
    }
  }

  getTail() {
    if (this.head == null) {
      return 'List is empty.';
    } else {
      let check = this.head;
      do {
        check = this[check];
      } while (this[check] != null);
      return check;
    }
  }

  getNodeAt(index) {
    if (this.head != null) {
      if (this.getSize() < index) {
        return 'This list too short';
      } else {
        let counter = 0;
        let check = this.head;
        while (counter < index - 1) {
          check = this[check];
          counter += 1;
        }
        return check;
      }
    }
    return;
  }

  pop() {
    if (this.head != null) {
      if (this[this.head] == null) {
        delete this[this.head];
        this.head = null;
      } else if (this.head != null) {
        const length = this.getSize();
        delete this[this.getTail()];
        this[this.getNodeAt(length - 1)] = null;
      }
    }
  }

  contains(value) {
    if (this.head == null) {
      return 'List is empty.';
    } else {
      let check = this.head;
      let found = false;
      while (check != null) {
        if (check == value) {
          found = true;
          break;
        }
        check = this[check];
      }
      return found;
    }
  }

  find(value) {
    if (this.head == null) {
      return 'List is empty.';
    } else {
      let check = this.head;
      let found = false;
      let counter = 1;
      while (check != null) {
        if (check == value) {
          found = true;
          break;
        }
        check = this[check];
        counter += 1;
      }
      if (found) {
        return counter;
      } else {
        return null;
      }
    }
  }

  toString() {
    let message = '';
    let check = this.head;
    do {
      message += ` (${check}) -> `;
      check = this[check];
    } while (check != null);
    return `${message} null`;
  }

  insertAt(value, index) {
    if (this.getSize() < index) {
      this.append(value);
    } else {
      const node = new Node(value);
      this[node.value] = this[this.getNodeAt(index)];
      this[this.getNodeAt(index)] = node.value;
    }
  }

  removeAt(index) {
    if (this[this.head] != null) {
      if (this.getSize() < index) {
        this.pop();
      } else {
        let counter = 0;
        let check = this.head;
        while (counter < index - 2) {
          check = this[check];
          counter += 1;
        }
        const next = this[check];
        this[check] = this[next];
        delete this[next];
      }
    }
  }
}

export default LinkedList;
