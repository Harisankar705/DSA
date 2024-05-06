//linearSearchFirstGreater
function searchInArray(arr,target)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>target)
        {
            return i
        }
    }
    return -1
}
const arr = [1, 3, 5, 7, 9];
console.log(searchInArray(arr,6))