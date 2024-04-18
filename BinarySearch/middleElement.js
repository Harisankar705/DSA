function findMiddle(arr)
{
    let left=0
    let right=arr.length-1
    return Math.floor((left+right)/2)
}

const arr=[1,2,3,4,5,6,7]
console.log(findMiddle(arr))    