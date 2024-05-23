// function isPalindrome(str)
// {
//     if(str.length<=1)
//         {
//             return true
//         }
//         if(str[0]!==str[str.length-1])
//             {
//                 return false
//             }
//             return isPalindrome(str.slice(1,-1))
        
// }
// const str='racecar'
// console.log(isPalindrome(str))

// class Node
// {
//     constructor(data)
//     {
//         this.data=data
//         this.next=null
//     }
// }
// class LinkedList
// {
//     constructor()
//     {
//         this.head=null
//     }
//     append(data)
//     {
//         const newNode=new Node(data)
//         if(!this.head)
//             {
//                 this.head=newNode
//             }
//             else
//             {
//                 let current=this.head
//                 while(current.next)
//                     {
//                         current=current.next
//                     }
//                     current.next=newNode
//             }
//     }
//     fromArray(arr)
//     {
//         arr.forEach(data=>this.append(data))
//     }
//     display()
//     {
//         let current=this.head
//         while(current)
//             {
//                 console.log(current.data)
//                 current=current.next
//             }
//     }
// }

// const ll=new LinkedList()
// const arr=[1,2,3,4,5]
// ll.fromArray(arr)
// ll.display()


// function binarySearch(arr,target)
// {
//     let left=0
//     let right=arr.length-1
//     while(left<=right)
//         {
//             let middle=Math.floor((left+right)/2)
//             if(arr[middle]===target)
//                 {
//                     return middle
//                 }
//                 else if(arr[middle]<target)
//                     {
//                         left=middle+1
//                     }
//                     else
//                     {
//                         right=middle-1
//                     }
//         }
// }
// const arr=[1,2,3,4,5]
// console.log(binarySearch(arr,5))

// const array=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let sum=0
// array.forEach((row)=>{
//     row.forEach((element)=>{
//         sum+=element
//     })
// })
// console.log(sum)

function reveseString(str)
{
    if(str.length<=1)
        {
            return str
        }
        return reveseString(str.slice(1))+str[0]
}
const str='hari'
console.log(reveseString(str))
