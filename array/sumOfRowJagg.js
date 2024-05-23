function sumOfRow(jaggedArray,rowIndex)
{
    if(rowIndex<0 || rowIndex>=jaggedArray.length)
        {
            return 0
        }
        let rowSum=0
        for(let j=0;j<jaggedArray[rowIndex].length;j++)
            {
                rowSum+=jaggedArray[rowIndex][j]
            }
            return rowSum
}
const arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
]
console.log(sumOfRow(arr,2))