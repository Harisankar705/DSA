function findFirstOccurences(arr,target)
{
    let left=0
    let result=-1
    let right=arr.length-1
    while(left<=right)
    {
        let middle=Math.floor((left+right)/2)
        if(arr[middle]===target)
        {
            return middle
            right=middle-1
        }
        else if(arr[middle]<target)
        {
            left=middle+1
            
        }
        else
        {
            right=middle-1
        }
    }
    return result
}

const arr=[1,2,3,2,1,2]
console.log(findFirstOccurences(arr,2))