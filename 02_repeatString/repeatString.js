const repeatString = function(string, num) {
    let i = 0;
    let finalString = '';

    if (num < 0)
        return 'ERROR';

    while (i < num) {
        finalString += string;
        i++;
    }

    return finalString;

};

// Do not edit below this line
module.exports = repeatString;
