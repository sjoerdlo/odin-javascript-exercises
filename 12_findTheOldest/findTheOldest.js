const findTheOldest = function(objectArray) {
    const ageArray = [];
    let currentYear = new Date().getFullYear();
    for (const person of objectArray) {
        if (person.yearOfDeath) {
            ageArray.push(person.yearOfDeath - person.yearOfBirth);
        } else {
            ageArray.push(currentYear - person.yearOfBirth);
        }
    }

    let indexOfHighestAge = ageArray.indexOf(Math.max(...ageArray));
    return objectArray[indexOfHighestAge];
};

// Do not edit below this line
module.exports = findTheOldest;
