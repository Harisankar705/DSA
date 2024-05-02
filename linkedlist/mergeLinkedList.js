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
    mergedLinkedList(list1,list2)
    {
        let mergedLinkedList=new LinkedList()
        let current1=list1.head
        let current2=list2.head
        while(current1 && current2)
        {
            if(current1.data<current2.data)
            {
                mergedLinkedList.append(current1.data)
                current1=current1.next
            }
            else
            {
                mergedLinkedList.append(current2.data)
                current2=current2.next
            }
        }
        while(current1)
        {
            mergedLinkedList.append(current1.data)
            current1=current1.next
        }
        while(current2)
        {
            mergedLinkedList.append(current2.data)
            current2=current2.next
        }
        return mergedLinkedList

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
    const ll2=new LinkedList()
    ll2.append(4)
    ll2.append(5)
    ll2.append(6)
    const mergeLinkedList=new LinkedList().mergedLinkedList(ll,ll2)
    mergeLinkedList.display()
