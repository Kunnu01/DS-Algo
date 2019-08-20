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

    // traverse all nodes horizontally
    BreadthFirstSearch() {
        const data = [];
        const queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    /*
        PreOrder => Root, Left, Right
        PostOrder => Left, Right, Root
        InOrder => Left, Root, Right
    */

    // Depth First Search
    
    DFSPreOrder() {
        const data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current);
        return data;
    }

    DFSPostOrder() {
        const data = [];
        const current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        }
        traverse(current);
        return data;
    }

    DFSInOrder() {
        const data = [];
        const current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return data;
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
