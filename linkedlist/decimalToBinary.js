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

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    decimalToBinary(decimal) {
        if (decimal === 0) {
            this.prepend(0);
            return;
         }

        while (decimal > 0) {
            const remainder = decimal % 2;
            this.prepend(remainder);
            decimal = Math.floor(decimal / 2);
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
const decimalNumber = 5; // Example decimal number
const binaryList = new LinkedList();
binaryList.decimalToBinary(decimalNumber);
console.log("Binary representation of", decimalNumber, "is:");
binaryList.display(); // Output: Binary representation of 10 is: 1 0 1 0
