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
    deleteAtEnd()
    {
        if(!this.head && !this.head.next)
            {
                return null
            }
            let current=this.head
            while(current.next!==null)
                {
                    current=current.next
                }
                current.prev.next=null
                current=null
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
ll.append(3)
ll.deleteAtEnd()
ll.display( )