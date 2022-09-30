const caesar = function(stringToEncode, shiftFactor) {
    return stringToEncode.split('').map(char => shiftChar(char, shiftFactor)).join('');
};

function shiftChar(char, shiftFactor) {
    let charCode = char.charCodeAt();
    let charCode_A = 65;
    let charCode_Z = 90;
    let charCode_a = 97;
    let charCode_z = 122;
    let leftBoundCharCode;
    let rightBoundCharCode;

    // When the shift factor wraps more than once, bring it down to just 1 wrap
    if (shiftFactor > 25) {
        shiftFactor = 25 - Math.floor(shiftFactor / 26);
    }

    if ((charCode >= charCode_A && charCode <= charCode_Z) || (charCode >= charCode_a && charCode <= charCode_z)) {
        let shiftedCharCode = charCode + shiftFactor;

        if (charCode >= charCode_A && charCode <= charCode_Z) {
            // We have an Uppercase letter
            // Set charCode left and right bounds of uppercase alphabet
            leftBoundCharCode = charCode_A;
            rightBoundCharCode = charCode_Z;
        }
    
        if (charCode >= charCode_a && charCode <= charCode_z) {
            // We have a Lowercase letter
            // Set charCode left and right bounds of lowercase alphabet
            leftBoundCharCode = charCode_a;
            rightBoundCharCode = charCode_z;
        }
    
        // Wrap around the alphabet if necessary
        if (shiftedCharCode > rightBoundCharCode || shiftedCharCode < leftBoundCharCode) {
            shiftedCharCode = wrapAlphabet(leftBoundCharCode, rightBoundCharCode, charCode, shiftFactor);
        }

        return String.fromCharCode(shiftedCharCode);

    }
    
    return char;
}

function wrapAlphabet(leftBoundCharCode, rightBoundCharCode, charCode, shiftFactor) {
    // Wrap left
    if (charCode + shiftFactor < leftBoundCharCode) {
        shiftedCharCode = charCode + ((rightBoundCharCode - leftBoundCharCode) + shiftFactor + 1);
    // Wrap right
    } else if (charCode + shiftFactor > rightBoundCharCode) {
        shiftedCharCode = charCode - ((rightBoundCharCode - leftBoundCharCode) - shiftFactor) - 1;
    }

    return shiftedCharCode;
}

// Do not edit below this line
module.exports = caesar;
