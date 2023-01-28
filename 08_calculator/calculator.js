const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(arrayOfNumbers) {
  return arrayOfNumbers.reduce(
    (firstNumber,secondNumber) => add(firstNumber,secondNumber), 0);
};

const multiply = function(arrayOfNumbers) {
  return arrayOfNumbers.reduce(
    (firstNumber, secondNumber) => firstNumber * secondNumber, 1);
};

const power = function(integer, exponent) {
  array = [];
  for (let i = 0; i < exponent; i++) {
    array[i] = integer;
  }
  return multiply(array);
};

const factorial = function(integer) {
	let result = integer;
  if (integer == 0 || integer == 1) {
    return 1;
  }
  while (integer > 1) {
    integer--;
    result *= integer;
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
