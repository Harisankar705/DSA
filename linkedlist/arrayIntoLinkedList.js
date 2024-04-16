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
        let newNode=new Node(data)
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
    fromArray(arr)
    {
        arr.forEach(data=>this.append(data))
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
const array=[1,2,3,4,5,6,7,8,9,10]
linkedlist.fromArray(array)
linkedlist.display()