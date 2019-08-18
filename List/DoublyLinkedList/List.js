class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        const poppedNode = this.tail;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous = null;
        } 
        this.length -= 1;
        return poppedNode;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const shiftedNode = this.head;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.previous = null;
            shiftedNode.next = null;
        }
        this.length -= 1;
        return shiftedNode;
    }

    unShift(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            // const currentHead = this.head;
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }
        this.length += 1;
        return this;
    }

    get(pos) {
        if (pos < 0 || pos >= this.length) {
            return null;
        }
        let current = null;
        if (pos <= this.length / 2) {
            current = this.head;
            let index = 0;
            while (index !== pos) {
                index += 1;
                current = current.next;
            }
        } else {
            current = this.tail;
            let index = this.length - 1;
            while (index !== pos) {
                index -= 1;
                current = current.previous;
            }
        }
        return current;
    }

    set(pos, value) {
        const foundNode = this.get(pos);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(pos, value) {
        if (pos < 0 || pos > this.length) {
            return false;
        }

        if (pos === 0) {
            return !!this.unShift(value);
        }

        if (pos === this.length - 1) {
            return !!this.push(value);
        }

        const node = new Node(value);
        const previousNode = this.get(pos - 1);
        const nodeAtPos = this.get(pos);

        previousNode.next = node;
        node.previous = previousNode;
        node.next = nodeAtPos;
        nodeAtPos.previous = node;
        this.length += 1;
        return true;
    }

    remove(pos) {
        if (pos < 0 || pos >= this.length) {
            return false;
        }

        if (pos === 0) {
            return this.shift();
        }

        if (pos === this.length - 1) {
            return this.pop();
        }

        const removedNode = this.get(pos);
        removedNode.previous.next = removedNode.next;
        removedNode.next.previous = removedNode.previous;
        this.length -= 1;
        return removedNode;
    }
}

const list = new DoublyLinkedList();
