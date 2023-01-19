const removeFromArray = function(array, ...values) {
    let index = 0;
    for (let i = 1; i < (values.length + 1); i++) {
        if (array.includes(values[i-1])) {
            index = array.indexOf(values[i-1]);
            array.splice(index,1);
        }
        
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
