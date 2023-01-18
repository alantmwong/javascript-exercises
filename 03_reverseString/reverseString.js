const reverseString = function(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array[i] = string[i];
    }
    array.reverse();
    string = array.join("");
    return string
};

// Do not edit below this line
module.exports = reverseString;
