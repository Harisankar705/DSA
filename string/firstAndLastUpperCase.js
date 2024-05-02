function capitalize(str)
{
    let firstLetter=str.charAt(0).toUpperCase()
    let lastLetter=str.charAt(str.length-1).toUpperCase()
    let result=firstLetter+str.slice(1,-1)+lastLetter
    return result
}

const str='hari'
console.log(capitalize(str))