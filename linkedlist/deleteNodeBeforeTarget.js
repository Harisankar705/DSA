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
    deleteNodeBeforeTarget(target) {
        if (!this.head || !this.head.next) {
            return; // Nothing to delete or only one node
        }
        if (this.head.next.data === target) {
            this.head = this.head.next; // If the target is the second node, delete the first node
            return;
        }

        let current = this.head;
        while (current.next && current.next.next) {
            if ( current.next.next.data === target) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.deleteNodeBeforeTarget(3);
ll.display();
