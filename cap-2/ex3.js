
const size = 8;
const white = ' ';
const black = '#';
var line = '';

for (var i = 1; i <= size; i++) {
    for (var i2 = 1; i2 <= size; i2++) {
        if(i % 2 == 0){
            if(i2 % 2 == 0){
                line += black;
            }else{
                line += white;
            } 
        }else{
            if(i2 % 2 == 0){
                line += white;
            }else{
                line += black;
            } 
        }      
    }

    console.log(line);
    line = '';
}