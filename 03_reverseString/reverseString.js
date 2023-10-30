const reverseString = function(string) {
    let length = string.length -1;
    let reversedString = '';
    let char = '';
    for (let i = length; i >= 0; i--) {
        char = string.charAt(i);
        reversedString = reversedString + char; 
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
