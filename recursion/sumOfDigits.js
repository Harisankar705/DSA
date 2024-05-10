function sumOfDigits(num)
{
    if(num<10)
    {
        return num
    }
    const lastDigit=num%10
    const remainingDigits=Math.floor(num/10)
    return sumOfDigits(remainingDigits)+lastDigit
}

const num=12
console.log(sumOfDigits(num))
