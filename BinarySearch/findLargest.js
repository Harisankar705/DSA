function findLarest(arr)
{
    let left=0
    let right=arr.length-1
    while(left<right)
    {
        let middle=Math.floor((left+right)/2)
        if(arr[middle]<arr[right])
        // if(arr[middle]>arr[right]) for smallest element
        {
            left=middle+1
        }
        else
        {
            right=middle
        }
    }
    return arr[left]
}

const arr=[1,2,3,4,5,6]
console.log(findLarest(arr))