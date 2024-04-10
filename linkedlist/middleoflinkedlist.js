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
    addNode(data)
    {
        const newNode=new Node(data)
        if(!this.head)
        {
            this.head=newNode
            return
        }
        let current=this.head
        while(current.next)
        {
            current=current.next
        }
        current.next=newNode

    }
    findMiddle()
    {
        if(!this.head)return null
        let slow=this.head
        let fast=this.head
        while(fast && fast.next)
        {
            slow=slow.next
            fast=fast.next.next
        }
        return slow.data
    }
}

const linkedlist=new LinkedList()
linkedlist.addNode(1)
linkedlist.addNode(2)
linkedlist.addNode(3)
linkedlist.addNode(4)
linkedlist.addNode(5)
const middle=linkedlist.findMiddle()
console.log(middle)