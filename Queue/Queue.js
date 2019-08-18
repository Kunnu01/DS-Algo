class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    enqueue(value) {
        this.queue.push(value);
        this.size += 1;
        return this;
    }

    dequeue() {
        this.size -= 1;
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }
}

const queue = new Queue;

module.exports = Queue;
