const Queue = require('./Queue');

const weave = (sourceOne, sourceTwo) => {
    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.enqueue(sourceOne.dequeue());
        }

        if (sourceTwo.peek()) {
            q.enqueue(sourceTwo.dequeue());
        }
    }

    return q;
}

const q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);

const q2 = new Queue();
q2.enqueue('a');
q2.enqueue('b');

console.log(weave(q1, q2));
// Queue { queue: [ 1, 'a', 2, 'b' ], size: 4 }