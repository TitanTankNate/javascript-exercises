const palindromes = function (string) {
    // Read in string as array
    const inputArray = Array.from(string.toLowerCase());

    // Remove punctuation and whitespace
    function isPunctuation (char) {
        const punctuationArray = [" ", ",", ".", "?", "!"];   // Check for these chars
        if (punctuationArray.includes(char)) {
            return false;
        };
        return true;
    };
    const processArray = inputArray.filter(isPunctuation);

    // Copy string, but in reverse
    const reverseString = processArray.toReversed();

    // Compare two strings, stop when no longer valid
    for (i=0;i<processArray.length-1;i++) {
        if (processArray[i] != reverseString[i]) {
            return false;
        };
    };

    // Return true if all characters evaluate true
    return true;
};

// Do not edit below this line
module.exports = palindromes;

