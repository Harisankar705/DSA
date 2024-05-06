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

    findLength()
    {
        let current=this.head
        let count=0
        while(current)
            {
                count++
                current=current.next
                if(current===this.head)
                    {
                        break
                    }
            }
            return count
    }
}

const ll=new LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
console.log(ll.findLength(  ))