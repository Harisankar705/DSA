class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node, initially null
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Reference to the first node in the list, initially null
    }

    // Method to append a new node to the end of the list
    append(data) {
        const newNode = new Node(data); // Create a new node with the given data
        if (!this.head) {
            this.head = newNode; // If the list is empty, set the new node as the head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse the list until the last node
            }
            current.next = newNode; // Set the next pointer of the last node to the new node
        }
    }

    findIndex(target)
    {
       let current=this.head
       let index=0
        while(current)
        {
            if(current.data===target)
            {
                return index
            }
            current=current.next
            index++
        }
        return -1
    }

    // Method to print the elements of the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data); // Print the data of the current node
            current = current.next; // Move to the next node
        }
    }
}

// Example usage:
const ll = new LinkedList(); // Create a new linked list
ll.append(1); // Append some elements to the list
ll.append(2);
ll.append(3);
ll.append(4);

const targetIndex=ll.findIndex(3)
console.log(targetIndex);

