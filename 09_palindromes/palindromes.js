const palindromes = function (string) {
    stringClean = string.replace(/[\W_]/g, "").toLowerCase();

    stringArray = stringClean.split('');
    reverseString = stringArray.reverse().join('');

    if (stringClean === reverseString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
