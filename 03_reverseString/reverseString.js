const reverseString = function(inputString) {
    let currentCharIn;
    let currentCharOut;
    let newString = [];
    let oldString = inputString.split('');

    for (let i = 0; i < inputString.length; i++) {
        // Make new char at index i equal to old char at index -1-i
        // Choosing old char index -i doesn't work since 0 can't be negative,
        // but 0 is required to assign the first char in the new array.
        newString[i] = oldString.at(-1-i);
    }

    // Reform string from array of chars
    return newString.join("");
};

// Do not edit below this line
module.exports = reverseString;
