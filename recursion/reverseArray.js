function reverseArray(arr)
{
    if(arr.length<=1)
    {
        return arr
    }
    return reverseArray(arr.slice(1)).concat(arr[0])
}
const arr=[1,2,3,4,5]
console.log(reverseArray(arr))