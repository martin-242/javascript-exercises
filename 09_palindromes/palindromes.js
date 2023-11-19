const palindromes = function (input) {
    let string = input.trim().toLowerCase().replace(/\W/g, '');
      let length = string.length -1;
      for (i=0; i < length; i++){
          let charA = string.charAt(i);
          let charB = "";
          if (i == 0) {
            charB = string.charAt(length);
            }
          else{
            charB = string.charAt(length -i);
          }
          if ( charA != charB ) {
              return false;
          }
      }
      return true;
  };

// Do not edit below this line
module.exports = palindromes;
