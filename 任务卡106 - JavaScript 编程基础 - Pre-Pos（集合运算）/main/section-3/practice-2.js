'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for (let i = 0; i < objectB.value.length; i++) {
        for (let j = 0; j < collectionA.length; j++) {
            if (objectB.value[i] === collectionA[j].key) {
                if (collectionA[j].count /3>=1) {
                    collectionA[j].count -= Math.floor(collectionA[j].count/3);
                }
            }
        }
    }
    return collectionA;
}
