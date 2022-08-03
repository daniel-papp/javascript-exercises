const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^\w]/g, '')
    const rev = str.split('').reverse().join('');
    return str === rev;
};

// Do not edit below this line
module.exports = palindromes;
