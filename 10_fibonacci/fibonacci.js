// Fibonacci sequence
// Take "n" input element
// Create fibonacci sequence per the recurrence relation
// Fn = Fn-1 + Fn-2 for n > 1


const fibonacci = function(n) {
    // Handle bad input
    if ((!Number.isInteger(parseInt(n))) || (parseInt(n) < 0)) {
        return "OOPS";
    }

    // Create smallest possible fibo array
    let fiboArray = [0, 1];

    // Calculate the nth element of the array
    for (i=2;i<=parseInt(n);i++) {
        // Add that calculation as an element of the array
        fiboArray.push(fiboArray[i-1] + fiboArray[i-2]);
    };
    return fiboArray[parseInt(n)];
};

// DEBUG TESTING
console.log(fibonacci(3));

// Do not edit below this line
module.exports = fibonacci;
