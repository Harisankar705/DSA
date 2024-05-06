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
    insertNodeAtBeginning(data)
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
                    this.head=newNode
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
ll.append(3)
ll.insertNodeAtBeginning(0)
ll.display()