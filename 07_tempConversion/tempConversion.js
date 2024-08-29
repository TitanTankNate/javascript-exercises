const convertToCelsius = function(tempInF) {
  let convertedTemp;

  convertedTemp = (5/9) * (tempInF - 32);
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function(tempInC) {
  let convertedTemp;

  convertedTemp = ((9/5) * tempInC) + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// DEBUG
console.log(convertToCelsius(100));
console.log(convertToFahrenheit(37))