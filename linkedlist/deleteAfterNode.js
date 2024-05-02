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

  deleteNodeAfterTarget(target)
  {
      if(!this.head)
      {
          return null
      }
      let current=this.head
      while(current.next)
      {
          if(current.data===target && current.next)
          {
              current.next=current.next.next
              return 
          }
          current=current.next
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

const linkedlist = new LinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(5);

linkedlist.deleteNodeAfterTarget(3);
console.log("After deletion:");
linkedlist.display();

