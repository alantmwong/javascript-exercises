const removeFromArray = function(array, ...values) {
    for (let i = 1; i < arguments.length; i++){
        let index = array.indexOf(value);
        array.splice(index,1);
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
