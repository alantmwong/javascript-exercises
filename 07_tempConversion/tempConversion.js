const convertToCelsius = function(farenheit) {
  farenheit = (farenheit - 32) * (5/9);
  if (Number.isInteger(farenheit) == false) {
    farenheit = farenheit.toFixed(1);
    farenheit = Number(farenheit);
  }
  return farenheit
}

const convertToFahrenheit = function(celsius) {
  celsius = (celsius * (9/5)) + 32;
  if (Number.isInteger(celsius) == false) {
    celsius = celsius.toFixed(1);
    celsius = Number(celsius);
  }
  return celsius
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
