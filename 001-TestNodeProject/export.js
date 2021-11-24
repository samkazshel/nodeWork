'use strict';
const thing = ["wow look at this", "it's an array"];

let addFunc = () => {
    return 4 + 4;
}

let oddOrEven = x => {
    x = 2;
    if (x % 2 == 0) {
        return 'b';
    } else {
        return 'a';
    }
}

module.exports.thingArray = thing;
module.exports.addFunc = addFunc;
module.exports.oddOrEven = oddOrEven;