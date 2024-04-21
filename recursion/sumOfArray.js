    function sumOfArray(arr)
    {
        if(arr.length===0)
        {
            return 0
        }
        return sumOfArray(arr.slice(1))+arr[0]
    }
    const arr=[5,5,5,5,5]
    console.log(sumOfArray(arr))