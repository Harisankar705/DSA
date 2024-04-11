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

    removeValue(value) {
        // Handle the case where the head itself needs to be removed
        while (this.head && this.head.data === value) {
            this.head = this.head.next;
        }

        // Traverse the linked list and remove the specified value
        let current = this.head;
        while (current && current.next) {
            if (current.next.data === value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
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
linkedlist.append(2);
linkedlist.append(1);
linkedlist.append(3);
console.log("Linked list before deletion:");
linkedlist.display();
linkedlist.removeValue(1);
console.log("Linked list after deletion:");
linkedlist.display();
