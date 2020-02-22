// finding the most frequent symbol in the array



// firstly function for finding the symbols frequency
function find_the_symbol(symbol,symbolRow) {
    let counter = 0;
    let newArray = [];
    for (let i = 0; i < symbolRow.length; i++) {
        if (symbol === symbolRow[i]) {
            counter++;
        }
    }
    newArray[0] = symbol;
    newArray [1] = counter;
    return newArray;

}

// function that returns array of nested arrays, which contain symbol and how many times it  occurs in the first array 
function transfer_all_symbols_to_check(symbolRow) {
    let ArrayElementinArray = [];
    for (let i = 0; i < symbolRow.length; i++) {
        ArrayElementinArray[i] = find_the_symbol(symbolRow[i], symbolRow);
    }
    
  return ArrayElementinArray;  
}

// now the main difficulty I has : eliminate repeating elements




let symforcheck = ['s','s',6,6,6,6,6,6,6,'d','a',5,5,5,5,'s','s',4,5,5,65,65,45,21,656,5,'d','d','d','s','a','d','d','d'];

let tempArray = transfer_all_symbols_to_check(symforcheck);

//console.log (tempArray);

let max_freq = 0;
let max_freq_arr = [];
let k = 0;
for (let i = 0; i < tempArray.length; i++) {
    for ( let j = 0; j < tempArray.length; j++){
        if (tempArray[j][1] > max_freq) {
            max_freq = tempArray[j][1];        
        }
    }
    if( tempArray[i][1] === max_freq ) {
        max_freq_arr [k] = tempArray[i];
        k++;
    }

}
//console.log(max_freq_arr);
// the result must be array of nested arrays, without repetitions, I know the length of final array, and values in its first nested array
let finalArray = [];
let lengthofFinalArray = max_freq_arr.length/max_freq;
finalArray[0] = max_freq_arr[0];
console.log(finalArray[0]);
console.log(lengthofFinalArray);
// this part solved by Davit, the tutor
const result = []

for(let i = 0; i < max_freq_arr.length; i++){

        let isExist = false;

        for(let j = 0; j < result.length; j++){

            if(result [j] && result[j][0] === max_freq_arr[i][0]){

                isExist = true;

                break;

            }

        }

    if(!isExist){

    result.push(max_freq_arr[i]);

    }

}

console.log(result);

