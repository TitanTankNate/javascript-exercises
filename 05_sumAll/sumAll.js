const sumAll = function(startInt, endInt) {
    // Return "ERROR" for negative numbers
    if (startInt < 0 || endInt < 0) {
        return "ERROR";
    }

    // Return "ERROR" for incorrect data types
    if (typeof(startInt)!== 'number' || typeof(endInt)!== 'number') {
        return "ERROR";
    }

    // Return "ERROR" for non-integer numbers
    if (!Number.isInteger(startInt) || !Number.isInteger(endInt)) {
        return "ERROR";
    }

    let result = 0;
    // Select looping direction based off which argument is larger
    if (startInt < endInt) {
        // Loop through all integers from startInt to endInt
        for (i = startInt;i <= endInt;i++) {
            result += i;
            //console.log("Intermediate result: " + result);
        }
    } else {
        // Loop through all integers from endInt to startInt
        for (i = endInt;i <= startInt;i++) {
            result += i;
            //console.log("Intermediate result: " + result);
        }
    }


    return result;
};

// Do not edit below this line
module.exports = sumAll;

console.log("Final result: " + sumAll(3,9));
