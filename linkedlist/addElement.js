//this code intends to add 123 aas the last of the node and 4 as the first of the node

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
        let head=null
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

    prepend(data)
    {
        const newNode=new node(data)
         newNode.next=this.head
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

const linkedlist=new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)

linkedlist.prepend(4)
console.log("linked list")
linkedlist.display()