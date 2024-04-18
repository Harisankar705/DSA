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
    minAndMax()
    {
        if(!this.head)
        {
            return {min:null,max:null}
        }
        let current=this.head
        let min=current.data
        let max=current.data
        while(current)
        {
            if(current.data<min)
            {
                min=current.data
            }
            if(current.data>max)
            {
                max=current.data
            }
            current=current.next
        }
        return {min:min,max:max}
    }
}

const linkedlist=new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
const {min,max}=linkedlist.minAndMax()
console.log("max",max)
console.log("min",min)