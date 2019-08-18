

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adding data to the list
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    // remove from the Last
    pop() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let previous = current;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.length -= 1;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // remove from the Head
    shift() {
        if (!this.head) {
            return undefined;
        }

        const currentHead = this.head;
        this.head = currentHead.next;

        if (!currentHead.next) {
            this.tail = null;
        }

        this.length -= 1;
        return currentHead;
    }

    // add to the beginning of the list
    unShift(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length += 1;
        return this;
    }

    // retrieving a node by it's position
    get(pos) {
        if (pos < 0 || pos >= this.length) {
            return null;
        }

        let index = 0;
        let current = this.head;

        while (index !== pos) {
            index += 1;
            current = current.next;
        }

        return current;
    }

    // set the value of a certain node
    set (pos, value) {
        const foundNode = this.get(pos);
        if (!foundNode) {
            return false;
        }
        foundNode.val = value;
        return true;
    }

    // add a node at given position
    insert(pos, value) {
        if (pos < 0 || pos > this.length) {
            return false;
        }

        if (pos === this.length) {
            return !!this.push(value); // to get bool
        }

        if (pos === 0) {
            return !!this.unShift(value); // to get bool
        }

        const node = new Node(value);
        const previous = this.get(pos - 1);
        node.next = previous.next;
        previous.next = node;
        this.length += 1;
        return true;
    }

    // remove a certain node
    remove(pos) {
        const foundNode = this.get(pos);

        if (!foundNode) {
            return undefined;
        }

        if (pos === 0) {
            return this.shift();
        }

        if (pos === this.length - 1) {
            return this.pop();
        }

        const previous = this.get(pos - 1);
        previous.next = foundNode.next;
        this.length -= 1;
        return foundNode;
    }

    // reverse the list in place
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let previous = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }
}

const list = new SinglyLinkedList();

// list.push('Hello');
// list.push('World!');
// list.push('!');
// list.reverse();
// list.pop();
// list.shift();
// list.unShift('Yo');
// console.log(JSON.stringify(list, null, 2));
