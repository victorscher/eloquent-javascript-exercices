function arrayToList(array) {
    list = {};
    for (var i = array.length-1; i >= 0; i--) {

        if(i == array.length-1){
            list = {
                value:array[i],
                rest: null
            }
        }else{
            list = {
                value:array[i],
                rest: list
            }
        }
    }

    return list;
}

function listToArray(list) {
    array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array;
}

function prepend(element, list) {
    list = {
        value: element,
        rest: list
    };

    return list;
}

function normalNth(list, position){
    array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array[position];
}

function nth(list, n) {
    if (!list){
        return undefined;
    } 
    else if (n == 0){
        return list.value;
    }
    else {
        return nth(list.rest, n - 1);
    }
  }

//console.log(arrayToList([10, 20]));
//console.log(listToArray(arrayToList([10, 20, 30])));
//console.log(prepend(10, arrayToList([20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 2));