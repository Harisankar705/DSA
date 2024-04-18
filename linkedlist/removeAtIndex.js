class Node
{
    constructor(data)
    {
        this.data=data,
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
            while(current.next)
            {
                current=current.next
                        }
                        current.next=newNode
        }
    }

    removeAtIndex(index)
    {
        while(this.head && this.head.data===index)
        {
            this.head=this.head.next
        }
        let current=this.head
        let previous=null
        let currentIndex=0
        while(current && currentIndex!==index)
        {
            previous=current
            current=current.next
            currentIndex++
        }
        if(!current)
        {
            return
        }
        previous.next=current.next
    }
    display()
    {
        let current=this.head
        while(current)
        {
            console.log(current.data)
        current=current.next        }
    }
}
const linkedlist=new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.removeAtIndex(2)
linkedlist.display()