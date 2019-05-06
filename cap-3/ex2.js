function isEven(n){
    function decrease(num){
        if(num > 1){
            num -= 2;
            return decrease(num);
        }else{
            return num;
        }
    }
    
    if(decrease(n) == 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(50));