const sumAll = function(fromNum, toNum) {
    if ((typeof fromNum) != 'number' || 
        (typeof toNum) != 'number' ||
        fromNum < 0 ||
        toNum < 0) {
        return 'ERROR';
    }

    let sum = 0;

    if (fromNum < toNum) {
        startNum = fromNum;
        endNum = toNum;
    } else {
        startNum = toNum;
        endNum = fromNum;
    }

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
