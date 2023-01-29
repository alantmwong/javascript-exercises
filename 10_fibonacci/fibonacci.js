const fibonacci = function(member) {
    if (member < 0) return "OOPS";
    array = [1,1];
    for (i = 2; i < member; i++) {
        array[i] = array[i-2] + array[i-1];
    }
    return array[member-1];
};

// Do not edit below this line
module.exports = fibonacci;
