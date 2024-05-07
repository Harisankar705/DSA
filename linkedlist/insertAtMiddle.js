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
    append(data)
    {
        const newNode=new Node(data)
        if(!this.head)
            {
                this.head=newNode
            }
            else
            {
                let current=this.head
                while(current && current.next)
                    {
                        current=current.next
                    }
                    current.next=newNode
            }
    }
    insertAtMiddle(data)
    {
        const newNode=new Node(data)
        if(!this.head)
            {
                this.head=newNode
            }
            else
            {
                let prev=null
                let slow=this.head
                let fast=this.head
                while(fast && fast.next)
                    {
                        prev=slow
                        slow=slow.next
                        fast=fast.next.next
                    }
                    prev.next=newNode
                    newNode.next=slow

            }
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
ll.append(1)
ll.append(2)
ll.append(4)
ll.append(5)
ll.insertAtMiddle(3)
ll.display()
