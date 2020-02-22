//unique string finder

function check_for_symbol (symbol, symbolField) {
    let exist = false;
    for (let i = 0; i < symbolField.length; i++) {
        if (symbolField[i] === symbol) {
            exist = true; break;
        }
    }
return exist;
}


function longest_uniqueStringFinder(str){
    let uniq_Holder = str[0];
    let uniqs_array = [];

for (let i = 1; i < str.length; i++) {
    if (!check_for_symbol(str[i], uniq_Holder)) { 
        uniq_Holder += str[i];
    } else {uniqs_array.push(uniq_Holder);
        // xndri imasty es i-ic sharunakelu mej er, che?
        i = str.indexOf(str[i],str.indexOf(uniq_Holder));
        uniq_Holder = '';
       
    } 
}
//console.log(uniqs_array);
let max = -Infinity;
let final_return = new Array(2);
let maxIndex;
for (let i = 0; i < uniqs_array.length; i++ ) {
    if (max < uniqs_array[i].length ) {
        max  = uniqs_array[i].length;
        maxIndex = i;
    }
}
final_return[0] = uniqs_array[maxIndex];
final_return[1] = max;

return final_return;
}





let stringforCheck='adfagvasdcsadckasldfjasqwertyuiopasdfghjkldkjfkhrjfbabdcdasbcbasdc';

let g = longest_uniqueStringFinder(stringforCheck);
console.log(g);