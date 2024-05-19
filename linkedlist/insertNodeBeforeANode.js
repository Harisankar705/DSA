class Node
{
    constructor(data)
    {
        this.data=data
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
  insertBefore(data,target)
  {
      const newNode=new Node(data)
      if(this.head && this.head.data===target)
      {
          newNode.next=this.head
          this.head=newNode
          return
      }
      let current=this.head
      while(current && current.next)
      {
          if(current.next.data===target)
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
const ll=new LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.insertBefore(5,3)
ll.display()
