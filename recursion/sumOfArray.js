    function sumOfArray(arr)
    {
        if(arr.length===0)
        {
            return 0
        }
        return arr[0]+sumOfArray(arr.slice(1))
    }
    const arr=[5,5,5,5,5]
    console.log(sumOfArray(arr))