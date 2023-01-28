const removeFromArray = function(array, ...values) {
<<<<<<< HEAD
    for (let i = 1; i < arguments.length; i++){
        let index = array.indexOf(value);
        array.splice(index,1);
=======
    let index = 0;
    for (let i = 1; i < (values.length + 1); i++) {
        if (array.includes(values[i-1])) {
            index = array.indexOf(values[i-1]);
            array.splice(index,1);
        }
        
>>>>>>> b337661ae669ba556468af22e64b69a46013ab10
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
