stringNoPunctuation = (string) => {
    let array = string.split("");
    const noPunctuation = array.filter(symbol => {
        if (symbol != " " || symbol != "," || symbol != "!" || symbol != ".") {
            return true;
        }
    })
    return noPunctuation;
};

const palindromes = function (string) {
    let noPunctuation = stringNoPunctuation(string);
    let reverse = noPunctuation.reverse();
    let joinArray = reverse.join("");
    if (joinArray == string) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
