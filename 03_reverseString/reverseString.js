const reverseString = function(string) {
    let stringArr = string.split('');
    let stringReversed = '';

    for (let i = stringArr.length; i > 0; i--) {
        stringReversed += stringArr[i - 1];
    }

    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
