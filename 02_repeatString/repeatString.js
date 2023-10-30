const repeatString = function(word, times) {
    let string = "";
    if ( times < 0 ) {
        error = "ERROR";
        return error;
    };
    for (let i = 0 ; i < times; i++) {
        string = string + word;
    }
    return string;

};

// Do not edit below this line
module.exports = repeatString;