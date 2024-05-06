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

    // Function to insert a node at the end of the linked list
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

   // Function to remove a node at a specified index
removeAtIndex(index) {
    if (index < 0) return; // Invalid index
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    let prev = null;
    let count = 0;
    while (current && count < index) {
        prev = current;
        current = current.next;
        count++;
    }

    prev.next = current.next;
}
    
    
    // Function to display the linked list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
console.log("Before removal:");
ll.display(); // Output: 1 2 3 4
ll.removeAtIndex(2); // Remove node at index 2
console.log("After removal:");
ll.display(); // Output: 1 2 4
