const getTheTitles = function(booksArray) {
    // Take in array of book titles
    // Iterate through each element of the array, pulling out titles only
    // Add those titles to a "title" array
    // Return the array
    const titles = booksArray.map((book) => book.title);
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
