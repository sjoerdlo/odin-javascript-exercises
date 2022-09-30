const removeFromArray = function(array, ...removeFromArray) {

    
    for (const arg of removeFromArray) {
        if (array.indexOf(arg) === -1)
            continue;

        array.splice(array.indexOf(arg), 1);
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
