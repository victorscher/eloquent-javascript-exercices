function range(start, end, interval = 1) {
    var numbers = [];

    if(interval == 0){
        return null;
    }else if(interval > 0){
        for (var i = start; i <= end; i += interval) {
            numbers.push(i);
        }
    }else{
        interval *= -1;
        for (var i = end; i >= start; i -= interval) {
            numbers.push(i);
        }
    }

    return numbers;
}

function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

console.log(range(1, 10, -3));