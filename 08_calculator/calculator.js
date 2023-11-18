const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
	let result = a - b;
  return result;
};

const sum = function(array) {
  let result = array[0]; 
  let size = array.length;
  if ( size === 0 ) {
    return 0;
  }
  else if ( size === 1 ) {
    return result;
  }
  else if ( size > 1 ) {
    for ( i = 1; i < size; i++ ) {
      result +=  array[i];
    }
    return result;
  }
};

const multiply = function(array) {
  let result = array[0]; 
  let size = array.length;
  for ( i = 1; i < size; i++ ) {
    result *=  array[i];
  }
  return result;
};

const power = function(a, b) {
	let result = a ** b;
  return result;
};

const factorial = function(number) {
	let result = number;
  if ( number <= 1 ) {
    return 1;
  }
  else {
    for ( let i = number ; i > 1 ; i-- ) {
      result *= (number -= 1);
    }
  };
  return result;
};

// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
