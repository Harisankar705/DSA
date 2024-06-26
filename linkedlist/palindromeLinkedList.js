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

    isPalindrome() {
        let current = this.head;
        const arr = [];

        // Traverse the linked list and store each node's value in the array
        while (current) {
            arr.push(current.data);
            current = current.next;
        }

        // Use two pointers to check if the array is a palindrome
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            if (arr[start] !== arr[end]) {
                return false; // Not a palindrome
            }
            start++;
            end--;
        }
        return true; // Palindrome
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(2);
linkedList.append(1);

console.log("Is Palindrome:", linkedList.isPalindrome()); // Output: true
