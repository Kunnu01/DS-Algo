class MinStack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    push(value) {
        const min = this.size === 0
            ? value
            : this.stack[this.size - 1];

        this.stack.push({
            val: value,
            min: Math.min(min, value)
        });

        this.size += 1;
        return this.stack;
    }

    pop() {
        if (!this.size) {
            return false;
        }

        return this.stack.pop();
    }

    peek() {
        if (!this.size) {
            return null;
        }

        return this.stack[this.size - 1];
    }

    getMin() {
        if (!this.size) {
            return null;
        }

        return this.stack[this.size - 1].min;
    }
}

const stack = new MinStack();
