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
        
        findSecondLargest() {
            if (!this.head || !this.head.next) {
                return null;
            }
            let firstLargest = this.head.data > this.head.next.data ? this.head.data : this.head.next.data;
            let secondLargest = this.head.data < this.head.next.data ? this.head.data : this.head.next.data;
            let current = this.head.next.next;
            while (current) {
                if (current.data > firstLargest) {
                    secondLargest = firstLargest;
                    firstLargest = current.data;
                } else if (current.data > secondLargest && current.data < firstLargest) {
                    secondLargest = current.data;
                }
                current = current.next;
            }
            return secondLargest;
        }
    }

    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(0);
    linkedList.append(3);
    const secondLargest = linkedList.findSecondLargest();
    console.log(secondLargest); // Output: 2
