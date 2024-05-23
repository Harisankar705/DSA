class Node
{
    constructor(data)
    {
        this.data=data
        this.next=null
        this.prev=null
    }
}
class LinkedList
{
    constructor()
    {
        this.head=null
        this.tail=null
    }
    append(data)
    {
        const newNode=new Node(data)
        if(!this.head)
            {
                this.head=newNode
                this.tail=newNode
            }
            else
            {
                newNode.prev=this.tail
                this.tail.next=newNode
                this.tail=newNode
            }
    }
    deleteAfterNode(target)
    {
        let current=this.head
        while(current && current.data!==target)
            {
                current=current.next
            }
            if(current && current.next)
                {
                    const nodeToDelete=current.next
                    current.next=nodeToDelete.next
                    if(nodeToDelete.next)
                        {
                            nodeToDelete.next.prev=current
                        }
                        else
                        {
                            this.tail=current
                        }
                    
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
ll.deleteAfterNode(2)
ll.display()