class node
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
        const newNode=new node(data)
        if(!this.head)
        {
            this.head=newNode
        }
        else
        {
            let current=this.head
            while(current.next)
            {
                current=current.next
            }
            current.next=newNode
        }
    }
    deleteFromMiddle()
    {
        if(!this.head)
            {
                return
            }
            let slow=this.head
            let fast=this.head
            let prev=null
            while(fast && fast.next)
                {
                    prev=slow
                    slow=slow.next
                    fast=fast.next.next
                }
                if(!prev)
                    {
                        this.head=slow.next
                    }
                    else
                    {
                        prev.next=slow.next
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


const linkedlist=new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.deleteFromMiddle()
linkedlist.display()

