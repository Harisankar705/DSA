function mergeSortedArray(arr1,arr2)
{
    let j=0
    let mergedArray=[]
    let i=0
    while(i<arr1.length && j<arr2.length)
        {
            if(arr1[i]<arr2[j])
                {
                    mergedArray.push(arr1[i])
                    i++
                }
                else
                {
                    mergedArray.push(arr2[j])
                    j++
                }
        }
        while(i<arr1.length)
            {
                mergedArray.push(arr1[i])
                i++
            }
        while(j<arr2.length)
            {
                mergedArray.push(arr2[j])
                j++
            }
            return mergedArray
}
const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,10]
console.log(mergeSortedArray(arr1,arr2))