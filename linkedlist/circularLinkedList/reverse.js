class Node
{
    constructor(data)
    {
        this.data=data
        this.next=null
    }
}

class CircularLikedlist
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
            this.head.next=this.head
        }
        else
        {
            let current=this.head
            while(current.next!==this.head)
            {
                current=current.next
            }
            current.next=newNode
            newNode.next=this.head
        }
    }
    reverse()
    {
        if(!this.head)
            {
                return
            }
            let current=this.head
            let next=null
            let prev=null
            do
            {
                next=current.next
                current.next=prev
                prev=current
                current=next
            }
            while(current!==this.head)
                {
                    this.head.next=prev
                    this.head=prev
                }
    }
    display()
    {
        if(!this.head)
        {
            return
        }
        let current=this.head
        while(current)
        {
            console.log(current.data)
            current=current.next
        }
    }
}

const cLinkedList=new CircularLikedlist()
cLinkedList.append(1)
cLinkedList.append(2)
cLinkedList.append(3)
cLinkedList.reverse()
cLinkedList.display()