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
        printAsc()
        {
            let current=this.head
            const elements=[]
            while(current)
            {
                elements.push(current.data)
                current=current.next
            }
            elements.sort((a,b)=>b-a)
                    console.log(elements.join(' -> ')); // Print the sorted elements

        }
        
        
    }
    
 
    
    

   const linkedList=new LinkedList()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.printAsc()