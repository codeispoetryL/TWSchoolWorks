'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    let collectionB = objectB.value;
    for(let i = 0; i<collectionA.length ; i++)
    {
        for(let j = 0; j<collectionB.length ; j++)
        {
            if (collectionA[i] === collectionB[j])
            {
                result.push(collectionA[i]);
            }
        }
    }

    return result;
}

/*
第五行写成写成如下内容也是可以通过测试的
let collectionB = {value: ['a', 'd', 'e', 'f']};
collectionB = collectionB.value;
*/
