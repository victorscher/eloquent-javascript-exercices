function deepEqual(value1, value2) {
    if(value1 == null || value2 == null){
        return null;
    }else if(typeof value1 == 'object' && value2 == 'object'){

    }else{
        return value1 === value2;
    }
}

console.log(deepEqual(4, 2));