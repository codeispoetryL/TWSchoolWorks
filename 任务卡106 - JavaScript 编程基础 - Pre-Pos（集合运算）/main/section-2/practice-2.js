'use strict';

module.exports = function countSameElements(collection) {
    let array = [];
    let count = 1;

    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === collection[i + 1]) {
            count++;
        } else {
            if (collection[i].split("-").length === 1) {
                array.push({
                    key: collection[i - 1],
                    count: count
                });
                count = 1;
            } else {
                array.push({
                    key: collection[i].split("-")[0],
                    count: parseInt(collection[i].split("-")[1])
                });
            }
        }
    }

    return array;
};
