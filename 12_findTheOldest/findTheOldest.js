const findTheOldest = function(people) {
    const sorted = people.sort((a, b) => {
        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
        };

        if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
        };

        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return nextPerson - lastPerson;
    });
    const oldest = sorted[0];
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
