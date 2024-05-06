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

    // Method to prepend a new node at the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    binaryToDecimal() {
        let decimal = 0;
        let current = this.head;
        let power = 0;
        while (current) {
            decimal += current.data * Math.pow(2, power);
            power++;
            current = current.next;
        }
        return decimal;
    }
}

// Creating the linked list with the binary number 1010 (LSB to MSB)
const binaryList = new LinkedList();
binaryList.prepend(1);
binaryList.prepend(0);
binaryList.prepend(1);
binaryList.prepend(0);

console.log("Decimal equivalent:", binaryList.binaryToDecimal()); // Output should be 10
