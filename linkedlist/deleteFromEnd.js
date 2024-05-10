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
    deleteFromEnd()
    {
        if(!this.head)
            {
                return
            }
            let current=this.head
            let prev=current
            while(current.next)
                {
                    prev=current
                    current=current.next
                }
                prev.next=null
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
linkedlist.deleteFromEnd()
linkedlist.display()

