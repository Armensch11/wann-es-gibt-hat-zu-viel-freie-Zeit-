// classwork 3 Ex.11
function rotation (str) {
    let rotatedString = '';
    for (let i = Math.floor(str.length/2) ; i < str.length; i++) {
        rotatedString += str[i];
    }
    if (str.length%2 !== 0 ) {
        rotatedString += str [Math.ceil((str.length/2)-1)];
    }
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        rotatedString +=str[i];
    }
return rotatedString;
}

//let newstr = rotation('yuyoedsopolk');
//onsole.log(newstr); 


// classwork 3 Ex.12

// unique number frequency 
function symbol_occur(symbol, field) {
    let counter = 0;
    let symbolTimes = new Array(2);
    for (let i = 0; i < field.length; i++) {
        if (field[i] === symbol) {
            counter += 1;
        }
    }   
    symbolTimes[0] = symbol;
    symbolTimes[1] = counter;
    return symbolTimes;
    
    
}

function frequency_for_each (somearray){
    if (Array.isArray(somearray)){
    let data_array = [];
    let lange = somearray.length;
    for (let i = 0; i < somearray.length; i++) {
        data_array[i] = symbol_occur(somearray[i],somearray);
        data_array[i][1] = (data_array[i][1]) / lange;    
    }
    
    return data_array; 
}
    else {return [];}    
}
// it solves the exercise but the sequense is not as in initial arrow, can not get why
let esimInch = frequency_for_each([2,5,5,5,5,5,1,1,2,2,3,3,3,3,3,3,3,1,2,'f','f','f','f','f','f',5,1,5,4,1,5,41,5,4,66,1,1,1,1]);
let repetes;
for (let i = 0; i < esimInch.length; i++ ) { 
    repetes = false;
    for (let j = i+1; j < esimInch.length; j++) {
        if (esimInch[j][0] === esimInch[i][0]) {
            repetes = true;
            break;
        }
    }        
    if (!repetes) {    
    console.log (`${esimInch[i][0]} has frequency of ${esimInch[i][1]}`);
    }
}

// the romb print Ex.13
function half_romb(limit) {
    let row = '';
    for (let i = -limit; i <= limit; i++ ){
        row ='';
        for (let j = 1; j <= limit - Math.abs(i); j++) {
             row +=j;   
        }
        row += '\n';
        console.log(row);
    }
}
half_romb(10);