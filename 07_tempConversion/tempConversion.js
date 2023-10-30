const convertToCelsius = function(fahrenheit) {
    let conversion = (fahrenheit - 32) * (5/9);
    if ( conversion % 1 === 0 ) { 
    return conversion;
  }
  else {
    let rounded = Math.round(conversion * 10) / 10;
    return rounded;
  }
};

const convertToFahrenheit = function(celsius) {
  let conversion = (celsius * (9/5) + 32);
  if ( conversion % 1 === 0 ) { 
  return conversion;
}
else {
  let rounded = Math.round(conversion * 10) / 10;
  return rounded;
}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};