    function fibonacciUptoLimit(limit)
    {
        let fibSeries=[1,1]
        let fibCurr=1
        let fibPrev=1
        while(fibCurr<=limit)
        {
            const temp=fibCurr
            fibCurr+=fibPrev
            fibPrev=temp
            fibSeries.push(fibCurr)
        }
        return fibSeries
    }

    const limit=10
    console.log(fibonacciUptoLimit(limit))