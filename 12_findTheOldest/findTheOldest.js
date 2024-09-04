const findTheOldest = function(peopleArray) {
    // Accept an array of people
    // Iterate through the array, pulling out their birth and death years
    const sortedArray = peopleArray.sort(function(personA, personB) {
        // Retrieve year from today's date
        const today = new Date().getFullYear();

        // Calculate age based off of years
        // // Assume current year if death year is not defined
        const compareFirst = (personA.yearOfDeath == undefined ? today: personA.yearOfDeath) - personA.yearOfBirth;
        const compareNext =  (personB.yearOfDeath == undefined ? today: personB.yearOfDeath)- personB.yearOfBirth;
        
        // Sort the array based off their age
        return compareFirst > compareNext ? -1 : 1;
    });
    // Return the sorted array
    return sortedArray[0];

};

// Do not edit below this line
module.exports = findTheOldest;
