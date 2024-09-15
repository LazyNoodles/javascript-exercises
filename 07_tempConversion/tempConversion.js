const convertToCelsius = function(fahrenheit) {
  let newTemp = (fahrenheit - 32) * (5/9);
  let rounded = Math.round(newTemp * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celsius) {
  let newTemp = (9/5) * celsius + 32;
  let rounded = Math.round(newTemp * 10) / 10;
  return rounded; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
