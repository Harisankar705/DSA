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
   insertAfter(data,target)
   {
       const newNode=new node(data)
       let current=this.head
       while(current)
       {
           if(current.data===target)
           {
               newNode.next=current.next
               current.next=newNode
               return 
           }
           current=current.next
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


const linkedlist=new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.insertAfter(3,4)
linkedlist.display()

