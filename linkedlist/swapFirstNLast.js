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

        swapFirstAndLast() {
            if (!this.head || !this.head.next) {
                // List is empty or has only one node, no need to swap
                return;
            }

            let lastNode = this.head;
            let secondToLastNode = null;
            while (lastNode.next) {
                secondToLastNode = lastNode;
                lastNode = lastNode.next;
            }

            lastNode.next = this.head.next; // Connect last node to the second node
            this.head.next = null; // Disconnect first node from the rest of the list
            secondToLastNode.next = this.head; // Connect second-to-last node to the first node
            this.head = lastNode; // Update head pointer to the last node
        }

        display() {
            let current = this.head;
            while (current) {
                console.log(current.data);
                current = current.next;
            }
        }
    }

    // Usage
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    console.log("Before swapping:");
    ll.display();

    ll.swapFirstAndLast();
    console.log("After swapping:");
    ll.display();
