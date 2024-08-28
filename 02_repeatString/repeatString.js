const repeatString = function(string, num) {
    // Initialize variables
    let resultString = '';

    // For a positive num of times, iterate
    for (let i=1; i <= num; i++) {
        // Append to string
        resultString+=string;
    }

    // For a negative num of times, return error
    if (num<0) {
        return "ERROR";
    } else {
        return resultString;
    }
};

// Do not edit below this line
module.exports = repeatString;
