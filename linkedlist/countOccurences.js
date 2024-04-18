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
            while(current.next)
            {
                current=current.next
            }
            current.next=newNode

            
        }
    }
    findOccurences(target)
    {
        let count=0
        let current=this.head
        while(current)
        {
            if(current.data===target)
            {
                count++
            }
            current=current.next
        }
        return count
    }
}

const ll=new LinkedList()
ll.append(2)
ll.append(2)
ll.append(2)
const count=ll.findOccurences(2)
console.log(count);