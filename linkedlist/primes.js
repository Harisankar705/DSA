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
    isPrime(num)
    {
        if(num<=1)
        {
            return false
        }
        for(let i=2;i<num;i++)
        {
            if(num%i===0)
            {
                return false
            }
            return true
        }
    }
    findPrime()
    {
        let primes=[]
        let current=this.head
        while(current)
        {
            if(this.isPrime(current.data))
            {
                primes.push(current.data)
            }
            current=current.next
        }
        return primes
    }
}

const ll=new LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
const prime=ll.findPrime()
console.log(prime);