class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    insertBeforeNode(data, target) {
        const newNode = new Node(data);
        if (!this.head) {
            return;
        }
        if (this.head.data === target) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === target) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
        console.log("Target not found");
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedlist = new LinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(5);

console.log("Before insertion:");
linkedlist.display();

linkedlist.insertBeforeNode(4, 3);

console.log("After insertion:");
linkedlist.display();
