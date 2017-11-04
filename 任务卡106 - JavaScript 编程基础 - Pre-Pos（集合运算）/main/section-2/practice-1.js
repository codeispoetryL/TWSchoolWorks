'use strict';

module.exports = function countSameElements(collection) {
    let array = [];
    let count = 1;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === collection[i + 1]) {
            count++;
        } else {
            array.push({
                key: collection[i - 1],
                count: count
            });
            count = 1;
        }
    }

    return array;
}
