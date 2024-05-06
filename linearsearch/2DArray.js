function linearSearch(arr,target)
{
    for(let row=0;row<arr.length;row++)
        {
            for(let col=0;col<arr[row].length;col++)
                {
                    if(arr[col][row]===target)
                        {
                            return true
                        }
                }
        }
        return false
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(linearSearch(matrix,8))