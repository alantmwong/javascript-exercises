const sumAll = function(minNumber, maxNumber) {
    let array = [];
    if (minNumber > maxNumber) {
        let placeholder = minNumber;
        minNumber = maxNumber;
        maxNumber = placeholder;
    } 
    if (minNumber < 0 || maxNumber < 0) {
        return "ERROR"
    }

    if (typeof minNumber != "number" || typeof maxNumber != "number") {
        return "ERROR"
    }

    for (let i = minNumber; i < (maxNumber - minNumber + 2); i++) {
        array[i] = i;
    }
    array = array.filter(Number);

    let sumNumbers = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumNumbers
};

// Do not edit below this line
module.exports = sumAll;
