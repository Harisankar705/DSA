function binarySearch(arr,target,start=0,end=arr.length-1)
{
    if(start>end)
    {
        return -1
    }
    let middle=Math.floor((start+end)/2)
    if(arr[middle]===target)
    {
        return middle
    }
    else if(arr[middle]<target)
    {
        return binarySearch(arr, target, middle + 1, end);
    }
    else
    {
        return binarySearch(arr,target,start,middle-1)
    }
}

const arr=[1,2,3,4,5]
console.log(binarySearch(arr,5))