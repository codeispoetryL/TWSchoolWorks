'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    let temp = 0;

    for (let i = 0; i < collectionA.length; i++) {
        temp += 1;
        if (collectionA[i] !== collectionA[i + 1]) {
            result.push({key: collectionA[i], count: temp});
            temp = 0;
        }
    }

    for (let j = 0; j < objectB.value.length; j++) {
        for (let i = 0; i < result.length; i++) {
            if (objectB.value[j] === result[i].key) {
                if (result[i].count / 3 >= 1) {
                    result[i].count -= Math.floor(result[i].count / 3);
                }
            }
        }
    }

    return result;

};
'use strict';


module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    let temp = 0;

    for (let i = 0; i < collectionA.length; i++) {
        temp += 1;
        if (collectionA[i] !== collectionA[i + 1]) {
            result.push({key: collectionA[i], count: temp});
            temp = 0;
        }
    }

    for (let j = 0; j < objectB.value.length; j++) {
        for (let i = 0; i < result.length; i++) {
            if (objectB.value[j] === result[i].key) {
                if (result[i].count / 3 >= 1) {
                    result[i].count -= Math.floor(result[i].count / 3);
                }
            }
        }
    }

    return result;

};
