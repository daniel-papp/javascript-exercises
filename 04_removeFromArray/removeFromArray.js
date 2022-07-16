const removeFromArray = function(arr, ...removables) {
    for (const item of removables) {
        let index = arr.indexOf(item);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
