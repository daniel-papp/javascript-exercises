const fibonacci = function(n) {
    let previous = 1;
    let current = 1;
    let next;
    if (n < 0) {
        return 'OOPS';
    }
    for (let i = 1; i <= n-2; i++) {
        next = previous + current;
        previous = current;
        current = next;
    }
    return current;

};

// Do not edit below this line
module.exports = fibonacci;
