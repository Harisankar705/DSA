function findMinAndMax(arr)
{
    if(arr.length===0)
    {
        return{max:undefined,min:undefined}
    }
    let max=arr[0]
    let min=arr[0]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i]
        }
        else if(arr[i]<min)
        {
            min=arr[i]
        }
    }
    return{max:max,min:min}
}
const arr=[1,3,2,4,3,3,123,2,0]
console.log(findMinAndMax(arr))