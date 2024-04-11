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
            let current=this.head;
            while(current.next)
            {
                current=current.next
            }
            current.next=newNode
        }
    }
    isPalindrome()
    {
        let current=this.head
        let stack=[]
        while(current)
        {
            stack.push(current.data)
            current=current.next
        }
        current=this.head
        while(current)
        {
            if(current.data!==stack.pop())
            {
            return false
            }
            current=current.next
        
        }
        return true
    }
}

const linkedlist=new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(1)
if(linkedlist.isPalindrome())
{
    console.log("The list is a pal")
}
else
{
    console.log("NO pal");
}