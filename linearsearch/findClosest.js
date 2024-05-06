function findClosest(arr,target)
{
    let closest=arr[0]
    for(let i=1;i<arr.length;i++)
        {
            if(Math.abs(arr[i]-target)<Math.abs(closest-target))
                {
                    closest=arr[i]
                }
        }
        return closest
}
const arr=[1,2,3,4,5]
console.log(findClosest(arr,6))