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

    removeDuplicates() {
        let current = this.head;
        let prev = null; // Add prev pointer to keep track of the previous node
        const seen = new Set();
    
        while (current) {
            if (seen.has(current.data)) {
                // Remove the current node by updating the 'next' pointer of the previous node
                prev.next = current.next;
            } else {
                seen.add(current.data); // Add current data to the set of seen values
                prev = current; // Update the previous node
            }
            current = current.next; // Move to the next node
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

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(2);
linkedList.append(3);

linkedList.removeDuplicates()
linkedList.display();
