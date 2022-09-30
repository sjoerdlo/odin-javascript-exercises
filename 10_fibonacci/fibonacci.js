const fibonacci = function(fibIndex) {
    if (fibIndex < 0)
        return 'OOPS';

    let result = [0, 1];
    let fibIndexInt = parseInt(fibIndex);

    for (let i = 1; i < fibIndexInt; i++) {
        result.push(result[i] + result[i - 1]);
        
    }
    return result[fibIndexInt];
};

// Do not edit below this line
module.exports = fibonacci;
