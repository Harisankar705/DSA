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
        insertAfter(data,target)
        {
            const newNode=new Node(data)
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
        console.log("Element not found")
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
    linkedlist.append(10)
    linkedlist.append(20)
    linkedlist.append(40)
    linkedlist.append(50)
    console.log("Befor insertion")
    linkedlist.display()
    linkedlist.insertAfter(30,40)
    console.log("after insertions");
    linkedlist.display()