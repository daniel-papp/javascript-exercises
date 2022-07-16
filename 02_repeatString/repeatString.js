const repeatString = function(str, num) {
    let repeatedString = '';
    if (num < 0) {
        repeatedString = 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            repeatedString = repeatedString.concat(str);
        }
    }
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
