function findIndex(arr,target)
{
    let start=0
    let end=arr.length-1
    while(start<=end)
        {
            let middle=Math.floor((start+end)/2)
            if(arr[middle]===target)
                {
                    return middle
                }
                else if(arr[middle]<target)
                    {
                        start=middle+1
                    }
                    else
                    {
                        end=middle-1
                    }
        }
}

function indexesOfTarget(arr,target1,target2)
{
    let indexes=[]
    let index1=findIndex(arr,target1)
    let index2=findIndex(arr,target2)
    if(index1!==-1 )
        {
            indexes.push(index1)
            
        }
    if(index2!==-1 )
        {
            indexes.push(index2)
            
        }
        return indexes

}

const arr=[1,2,3,4]
console.log(indexesOfTarget(arr,3,4))

