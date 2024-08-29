const leapYears = function(yearToCheck) {
    // If year is divisible by 4, year is a leap year
    if (yearToCheck % 4 == 0){
        // However, only centuries divisible by 400 are leap centuries
        if (yearToCheck % 400 == 0){
            return true;
        } else if (yearToCheck % 100 == 0) { // Standard centuries are not
            return false;
        }
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

// DEBUG
//console.log(leapYears(1985));