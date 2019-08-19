/*
    Big O of BST
    Insertion -> Best & Average: O(log n)
    Creation -> Best & Average: O(log n)
    Worst Case: Not guaranteed 😅
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) {
                    return undefined; // or node count can be incremented
                }
                if (value < current.value) {
                    if (!current.left) {
                        current.left = node;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = node;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(value) {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }

        return false;
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(2);
tree.insert(1);
tree.insert(20);
tree.insert(15);
