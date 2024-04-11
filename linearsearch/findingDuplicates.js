function findDuplicates(arr)
{
    const duplicates=[]
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                if(!duplicates.includes(arr[i]))
                {
                    duplicates.push(arr[i])
                }
            }
        }
    }
    return duplicates
}
const arr=[1,2,3,3,21,1]
console.log(findDuplicates(arr))