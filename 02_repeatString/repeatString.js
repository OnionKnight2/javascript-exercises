const repeatString = function(string, num) {
    let i = 0;
    let repeat = "";

    if (num < 0) {
        return "ERROR";
    }

    while (i < num) {
        repeat += string;

        i++;
    }

    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
