function commonInArrays(arr1,arr2)
{
   let common=[]
   let j=0
   let i=0
   while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i]===arr2[j])
            {
                common.push(arr1[i])
                i++
                j++
            }
            else if(arr1[i]<arr2[j])
                {
                    i++
                }
                else
                {
                    j--
                }

    }
    return common
}

const arr1=[1,2,3,4,5,6]
const arr2=[5,6,7,8,9,10,6]
console.log(commonInArrays(arr1,arr2))