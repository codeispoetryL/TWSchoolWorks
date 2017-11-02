'use strict';

module.exports = function countSameElements(collection) {
    let key = [];
    let count = 0;
    let result = [];

    for(let i=0;i<collection.length;i++){
        if(collection[i]!== -1){
            key=collection[i];
            for(let j=0;j<collection.length;j++){
                if(key === collection[j]){
                    count++;
                    collection[j] = -1;
                }
            }
            result.push('key'+key[i] + ":" + 'count'+count);
            count = 0;
        }
    }

    return result;
}
