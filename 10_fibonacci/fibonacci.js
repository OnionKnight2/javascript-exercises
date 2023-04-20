const fibonacci = function(a) {
    // If a number is negative, return some string
    const aInt = parseInt(a);
    if (aInt < 0) {
        return "OOPS";
    }

    let fib = [1, 1];
    for (let i = 2; i < a; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }

    return fib[a - 1];
};

// Do not edit below this line
module.exports = fibonacci;
