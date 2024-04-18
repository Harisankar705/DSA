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
        this. head=null
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

    findSum()
    {
        let current=this.head
        let sumOfLinkedList=0
        while(current)
        {
            sumOfLinkedList+=current.data
            current=current.next
        }
        return sumOfLinkedList
    }

}
const linkedlist=new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(4)
const sum=linkedlist.findSum()
console.log(sum)