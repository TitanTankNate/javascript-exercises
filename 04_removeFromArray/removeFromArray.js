const removeFromArray = function(inputArray, ...elementsToRemove) {
    // Using the rest function ... allows us to pass an indefinite 
    // number of arguments containing values to remove

    // For each element in that indefinite array
    for (const elementToRemove of elementsToRemove) {
        // Compare each element to the elementToRemove
        for (let i = 0; i < inputArray.length; i++) {
            // If the element matches, remove it
            if (inputArray[i] === elementToRemove) {
                inputArray.splice(i,1);
                // Because splice will reduce the array size by one,
                // we need to re-run the check on the new value now
                // occupying this index
                i--;
            }
        }
    }


    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;

// DEBUGGING
console.log(removeFromArray([1, 2, 2, 3], 2));
