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

    deleteTarget(target) {
        if (!this.head) {
            // List is empty, nothing to delete
            return;
        }

        if (this.head.data === target) {
            // Target is the head node
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === target) {
                // Found the target node, delete it
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

const linkedlist = new LinkedList();
linkedlist.append(1);
linkedlist.append(11);
linkedlist.append(12);
linkedlist.append(13);
console.log("Original list:");
linkedlist.display();

linkedlist.deleteTarget(11);
console.log("List after deleting 11:");
linkedlist.display();
