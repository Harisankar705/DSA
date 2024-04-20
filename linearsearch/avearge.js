function findAverage()
{
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i]
    }
    const average=sum/arr.length
    return average
}

const arr=[1,2,3,4,5]
console.log(findAverage(arr))