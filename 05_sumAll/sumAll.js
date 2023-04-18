const sumAll = function(numberOne, numberTwo) {
    if (numberOne < 0 || numberTwo < 0 || typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
        return "ERROR";
    }

    let sum = 0;
    const numberStart = (numberOne < numberTwo) ? numberOne : numberTwo;
    const numberEnd = (numberStart === numberOne) ? numberTwo : numberOne;

    for (let i = numberStart; i <= numberEnd; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
