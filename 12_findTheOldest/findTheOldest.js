const findTheOldest = function(people) {
    const sortedPeople = people.sort((a, b) => {
        const aDeath = a.yearOfDeath ? a.yearOfDeath : 2023;
        const bDeath = b.yearOfDeath ? b.yearOfDeath : 2023;
        
        return ((bDeath - b.yearOfBirth) - (aDeath - a.yearOfBirth));
    });

    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
