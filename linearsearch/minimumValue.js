function findMinimum(arr,target)
{
    let minimum=arr[0]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<minimum)
        {
            minimum=arr[i]
        }
    }
    return minimum
}
const arr=[1,2,3,4,5]
console.log(findMinimum(arr))