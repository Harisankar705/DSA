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

   printAsc()
   {
    let element=[]
    let current=this.head
    while(current)
        {
            element.push(current.data)
            current=current.next
        }
        element.sort((a,b)=>a-b)
        console.log(element.join(' '))
   }
    
}

const linkedList = new LinkedList();
linkedList.append(134);
linkedList.append(22);
linkedList.append(33);
linkedList.printAsc();
