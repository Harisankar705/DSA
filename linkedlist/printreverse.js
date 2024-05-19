class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Corrected: Assign null to this.next, not this.next-null
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

    printReverse(node = this.head) {
        if (node) {
            this.printReverse(node.next);
            console.log(node.data);
        }
    }

    //iterative approach
    // reverseLinkedList()
    // {
    //     let current=this.head
    //     let prev=null
    //     while(current!==null)
    //     {
    //         const temp=current.next
    //         current.next=prev
    //         prev=current
    //         current=temp
    //     }
    // this.head = prev; // Update the head pointer to the new head of the reversed list

    // }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

linkedList.printReverse();
    