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
        this.head=null
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
    swapNode(node1Data,node2Data)
    {
        if(!node1Data && !node1Data)
            {
                return
            }
        let prev1=null
        let prev2=null
        let node1=this.head
        let node2=this.head
        while(node1 && node1.data!==node1Data)
            {
                prev1=node1
                node1=node1.next
            }
            while(node2 && node2.data!==node2Data)
                {
                    prev2=node2
                    node2=node2.next
                }
                if(!node1 && !node2)
                    {
                        return
                    }
                if(prev1)
                    {
                        prev1.next=node2
                    }
                    else
                    {
                        this.head=node2
                    }
                    if(prev2)
                        {
                            prev2.next=node1

                        }
                        else
                        {
                            this.head=node1
                        }
                        let temp=node1.next
                        node1.next=node2.next
                        node2.next=temp

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
linkedlist.swapNode(2,3)
linkedlist.display()

