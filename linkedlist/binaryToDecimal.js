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

    binaryToDecimal()
    {
        let decimal=0
        let current=this.head
        let power=0
        while(current)
        {
            decimal+=current.data*Math.pow(2,power)
            power++
            current=current.next
        }
        return decimal
    }
}
    const binarylist=new LinkedList()
    binarylist.append(1)
    binarylist.append(0)
    binarylist.append(1)
    binarylist.append(0)
    console.log("Decimal equivalent",binarylist.binaryToDecimal())