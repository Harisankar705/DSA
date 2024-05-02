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
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
 findSecondLargest()
 {
     if(!this.head && !this.head.next)
     {
         return null
     }
     let firstLargest=Math.max(this.head.data,this.head.next.data)
     let secondLargest=Math.min(this.head.data,this.head.next.data)
     let current=this.head.next.next
     while(current)
     {
      if(current.data>firstLargest)
     {
         secondLargest=firstLargest
         firstLargest=current.data
     }
     else if(current.data>secondLargest && current.data<firstLargest)
     {
         secondLargest=current.data

     }  
                        current=current.next

     }
     

     return secondLargest
 }
    

    

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(13);
const secondLargest=linkedList.findSecondLargest()
console.log(secondLargest)



