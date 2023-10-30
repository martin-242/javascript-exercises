const removeFromArray = function(items, ...args) {
    let length = items.length;
    const newArray = [];
    for (const item of items) {
        if (args.includes(item)) {
            continue;
        }
        else {
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;