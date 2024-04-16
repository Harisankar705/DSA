function findIndexes(arr,target1,target2)
{
    const indexes=[]
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]===target1 && arr[j]===target2)
            {
                indexes.push(i)
                indexes.push(j)
            }
            else if(arr[j]===target1 && arr[i]===target2)
            {
                indexes.push(i)
                indexes.push(j)
            }
        }
    }
    return  indexes
}
const arr=[1,21,3,434,54]
const target1=21
const target2=1
console.log(findIndexes(arr,target1,target2))