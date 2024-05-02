function findSecondLargest(arr)
{
    let left=0
    let right=arr.length-1
    let largest=0
    let secondLargest=arr[1]>largest?largest:arr[1]
    while(left<=right)
    {
        let middle=Math.floor((left+right)/2)
        if(arr[middle]>largest)
        {
            secondLargest=largest
            largest=arr[middle]
        }
        else if(arr[middle]>secondLargest && arr[middle]<largest)
        {
            secondLargest=arr[middle]
        }
        if(arr[middle]<largest)
        {
            right=middle-1
        }
        else
        {
            left=middle+1
        }

    }
    return secondLargest
}

const arr=[1,2,3,4,5]
console.log(findSecondLargest(arr))