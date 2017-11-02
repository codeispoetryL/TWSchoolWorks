'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    collectionB = collectionB[0];
    for(let i = 0; i<collectionA.length ; i++)
    {
        for(let j = 0; j<collectionB.length; j++)
        {
            if (collectionA[i] === collectionB[j])
            {
                result.push(collectionA[i]);
            }
        }
    }

    return result;
};



/*
另一种写法
let result = [];
    for(let i = 0; i<collectionA.length ; i++)
    {
        for(let j = 0; j<collectionB[0].length; j++)
        {
            if (collectionA[i] === collectionB[0][j])
            {
                result.push(collectionA[i]);
            }
        }
    }

    return result;
*/
