const palindromes = function (sentence) {
    // Make the string lowercase and split it to array of characters
    // Filter letter characters
    const letters = sentence.toLowerCase().split("").filter((letter) => letter.toUpperCase() !== letter.toLowerCase());

    // Check if a string is a palindrome
    if (letters.join("") === letters.reverse().join("")) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
