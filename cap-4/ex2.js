function reverseArray(array) {
    arrayReverse = [];

    for (var i = 0; i < array.length; i++) {
        arrayReverse.unshift(array[i]);
    }

    return arrayReverse;
}

function reverseArrayreverseArrayInPlace(array) {
    var arrayLength = array.length;

    var iDesc = arrayLength - 1;
    var aux = 0;

    for (var i = 0; i < Math.floor(arrayLength / 2); i++) {
        aux = array[i];
        array[i] = array [iDesc];
        array[iDesc] = aux;
        iDesc--;
    }

    return array;
}

//console.log(reverseArray([10, 20, 30]));

console.log(reverseArrayreverseArrayInPlace([10, 20, 30, 40, 50, 60]));