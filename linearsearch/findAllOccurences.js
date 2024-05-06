function findAllOccurences(arr,target)
{
    let occurences=[]
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]===target)
                {
                    occurences.push(i)
                }
        }
        return occurences
}
const arr = [1, 2, 3, 4, 2, 5, 2];
console.log(findAllOccurences(arr,2))