'use strict';

function createElem(key, count) {
    return {key, count};
}

module.exports = function countSameElements(collection) {
    let result = [];
    let count = 1;

    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === collection[i + 1]) {
            count++;
        } else {
            let elem = createElem(collection[i - 1], count);
            result.push(elem);
            count = 1;
        }
    }

    return result;
}
