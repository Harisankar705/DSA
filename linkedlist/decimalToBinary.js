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
        } else {
            while (decimal > 0) {
                const remainder = decimal % 2;
                this.prepend(remainder);
                decimal = Math.floor(decimal / 2);
            }
        }
    }
    
    display() {
        let current = this.head;
        let binaryStr = '';
        while (current) {
            binaryStr += current.data;
            current = current.next;
        }
        return binaryStr;
    }
}

const decimalNumber = 21;
const binaryList = new LinkedList();
binaryList.decimalToBinary(decimalNumber);
console.log(binaryList.display()); // Output: 10101
