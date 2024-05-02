function reverseWords(sentence)
{
    let arrayOfWords=sentence.split(' ')
    let reverseArray=arrayOfWords.reverse()
    let reverseSentence=reverseArray.join('')
    return reverseSentence
}

const words='hello world'
console.log(reverseWords(words))