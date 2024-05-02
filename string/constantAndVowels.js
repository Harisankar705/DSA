function countVowels(str)
{
    let vowelCount=0
    let constantCount=0
    let vowelRegex=/[aeiou]/
    for(let char of str)
    {
        if(/[a-z]/.test(char))
        {
            if(vowelRegex.test(char))
            {
                vowelCount++
            }
            else
            {
                constantCount++
            }
        }
    }
    return {vowel:vowelCount,constant:constantCount}

}

const str='hari'
console.log(countVowels(str))