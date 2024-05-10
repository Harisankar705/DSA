const array=[1,2,3,4,5,223,432]
//comment   true or false
function recursiveBinarySearch(arr,target,start=0,end=arr.length-1)
{
    if(start>end)
        {
            return -1
        }
            let middle=Math.floor((start+end)/2)
            if(arr[middle]===target)
                {
                    return recursiveBinarySearch(arr,target)
                }
                else if(arr[middle]<target)
                    {
                        return recursiveBinarySearch(arr,middle+1,end)
                    }
                    else 
                    {
                        return recursiveBinarySearch(arr,target,start,middle-1)
                    }
        
}

console.log(recursiveBinarySearch(array,5))