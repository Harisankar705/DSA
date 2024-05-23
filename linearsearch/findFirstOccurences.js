function findFirstOccurences(arr,target)
{
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]===target)
                {
                    return i
                }
        }
}
const arr=[1,2,3,4,5,5]
console.log(findFirstOccurences(arr,5))