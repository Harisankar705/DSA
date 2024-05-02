function findMiddle(arr)
{
    let left=0
    let right=arr.length-1
    let middle=Math.floor((left+right)/2)
    return arr[middle]
}
const arr=[1,2,3,4,5]
console.log(findMiddle(arr))