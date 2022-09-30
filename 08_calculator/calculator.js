const add = function(...values) {
  let result = 0;
  for (const value of values) {
    result += value;
  }
  return result;
};

const subtract = function(val1, val2) {
  return (val1 - val2);
};

const sum = function(valueArray) {
	let result = 0;
  for (const value of valueArray) {
    result += parseInt(value);
  }
  return result;
};

const multiply = function(valueArray) {
  let result = parseInt(valueArray[0]);
  for (let i = 1; i < valueArray.length; i++) {
    result = result * parseInt(valueArray[i]);
  }
  
  return result;
};

const power = function(val1, val2) {
	let result = val1;
  for (let i = 1; i < val2; i++) {
    result = result * val1;
    
  }
  return result;
};

const factorial = function(val) {
	let result = parseInt(val);
  if (result === 0 || result === 1) {
    return 1;
  }

  for (let i = result - 1; i > 0; i--) {
    result = result * i;
    
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
