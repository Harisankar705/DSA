//inserting node at the front of doubly linkedlist
class Node
{
    constructor(data)
    {
        this.data=data
        this.next=null
        this.prev=null
    }
}

class LinkedList
{
    constructor()
    {
        this.head=null
        this.tail=null
    }
    append(data)
    {
        const newNode=new Node(data)
        if(!this.head)
            {
                this.head=newNode
                this.tail=newNode
            }
            else
            {
                newNode.prev=this.tail
                this.tail.next=newNode
                this.tail=newNode
            }
    }

    insertNodeAtBeginning(data)
    {
        const newNode=new Node(data)
        newNode.next=this.head
        if(this.head!==null)
            {
                this.head.prev=newNode
            }
            this.head=newNode
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
ll.insertNodeAtBeginning(0)
ll.display()