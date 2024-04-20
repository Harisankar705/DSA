var arrayStringsAreEqual = function(word1, word2) {
    // Concatenate all strings in word1 array
    const string1 = word1.join('');
    
    // Concatenate all strings in word2 array
    const string2 = word2.join('');
    
    // Compare the concatenated strings
    return string1 === string2;
};  