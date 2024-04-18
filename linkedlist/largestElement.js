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
largestNum()
{
    if(!this.head)
    {
        return null
    }
    let current=this.head
    let largest=current.data
    while(current)
    {
        if(current.data>largest)   // change > to < to find the largest to smallest
        {
            largest=current.data
        }
        current=current.next
    }
    return largest
}
}

const linkedlist=new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
const largest=linkedlist.largestNum()
console.log(largest)