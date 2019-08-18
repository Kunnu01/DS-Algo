class Stack {
    constructor() {
        this.data = [];
        this.size = 0;
    }

    push(value) {
        this.data.push(value);
        this.size += 1;
        return this.size;
    }

    pop() {
        this.size -= 1;
        return this.data.pop();
    }

    peek() {
        return this.data[this.size - 1];
    }
}

const stack = new Stack();
