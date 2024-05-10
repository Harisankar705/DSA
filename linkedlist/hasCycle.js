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

        hasCycle()
        {
            if(!this.head || !this.head.next)
            {
                return false
            }
            let slow=this.head
            let fast=this.head.next
            while(fast && fast.next)
            {
                if(slow===fast)
                {
                    return true
                }
                slow=slow.next
                fast=fast.next.next
            }
            return false
        }
    }

    const ll=new LinkedList()
    ll.append(1)
    ll.append(2)
    ll.append(3)
    if(ll.hasCycle())
    {
        console.log("TRUE")
    }
    else
    {
        console.log("FALSE")
    }