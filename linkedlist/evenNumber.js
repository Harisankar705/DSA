class Node
{
    constructor(data)
    {
        this.data=data
        this.next=null
    }
}

class LinkedList
{
    constructor()
    {
        this.head=null
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
    
    isEven(num)
    {
        return num%2===0
    }
    findEven()
    {
        let even=[]
        let current=this.head
        while(current)
            {
                if(this.isEven(current.data))
                    {
                        even.push(current.data)
                    }
                    current=current.next
            }
            return even
    }
    display()
    {
        let current=this.head
        while(current)
        {
            console.log(current.data)
            current=current.next
        }
    }
}

const ll=new LinkedList()
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)
const even=ll.findEven()
console.log(even);