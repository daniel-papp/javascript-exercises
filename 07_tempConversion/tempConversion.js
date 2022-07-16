const ftoc = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  ans = Math.round(celsius * 10) / 10;
  return ans;

};

const ctof = function(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  ans = Math.round(fahrenheit * 10) / 10;
  return ans;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
