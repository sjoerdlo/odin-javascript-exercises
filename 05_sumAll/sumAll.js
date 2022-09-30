const sumAll = function(int1, int2) {
    if (!Number.isInteger(int1) || !Number.isInteger(int2) || int1 < 0 || int2 < 0)
        return 'ERROR';

    let startInt = (int1 < int2) ? int1 : int2;
    let endInt = (int1 > int2) ? int1 : int2;

    let finalSum = 0;

    for (let i = startInt; i <= endInt; i++) {
        finalSum = finalSum + i;
    }

    return finalSum;
    
};

// Do not edit below this line
module.exports = sumAll;
