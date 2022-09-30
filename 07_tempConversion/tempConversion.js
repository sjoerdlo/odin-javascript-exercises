const ftoc = function(degrees) {
  let celcius = (degrees - 32) * (5 / 9);
  return Math.round(celcius * 10) / 10;
};

const ctof = function(degrees) {
  let Fahrenheit = (degrees * (9 / 5) + 32);
  return Math.round(Fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
