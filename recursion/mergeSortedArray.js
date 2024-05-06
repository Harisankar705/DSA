function mergeSortedArray(arr1,arr2)
{
    if(arr1.length===0)
    {
        return arr2
    }
    if(arr2.length===0)
    {
        return arr1
    }
    if(arr1[0]<arr2[0])
    {
        return [arr1[0],...mergeSortedArray(arr1.slice(1),arr2)]
    }
    else
    {
        return [arr2[0],...mergeSortedArray(arr2.slice(1),arr1)]

    }
}

const arr1=[1,2,3]
const arr2=[4,5,6]
console.log(mergeSortedArray(arr1,arr2))