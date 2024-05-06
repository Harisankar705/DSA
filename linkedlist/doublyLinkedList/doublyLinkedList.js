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
        displayForward()
        {
            let current=this.head
            while(current)
            {
                console.log(current.data)
                current=current.next
            }
        }
        displayBackward()
        {
            let current=this.tail
            while(current)
            {
                console.log(current.data)
                current=current.prev
            }
        }
    }

    const doublyLinkedList=new LinkedList()
    doublyLinkedList.append(1)
    doublyLinkedList.append(2)
    doublyLinkedList.append(3)
    doublyLinkedList.displayForward()
    console.log("----------------------");
    doublyLinkedList.displayBackward()