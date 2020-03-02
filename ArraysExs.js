// given two arrays, get all non matching elements to a new array, using only .push method
function existCheck(element, inArray){
    let existance = false;
    for (let i =0; i < inArray.length; i++) {
        if (inArray[i] === element) {
            existance = true;
            return existance;
        }
    }
    return existance;
}
function diffOfArrays(arr1, arr2) {
    let differArray = [];
    if (arr1.length === arr2.length){
            for (let i=0; i < arr1.length; i++) {
                if (!existCheck(arr1[i],arr2)) {
                    differArray.push(arr1[i]);
                }
                if (!existCheck(arr2[i],arr1)) {
                    differArray.push(arr2[i])
                }
                }
        } else {for (let i=0; i < arr1.length; i++) {
            if (!existCheck(arr1[i],arr2)) {
                differArray.push(arr1[i]);
            }
            }
            for (let i=0; i < arr2.length; i++){
            if (!existCheck(arr2[i],arr1)) {
                differArray.push(arr2[i])
            }
            }

        }
        return differArray;            
    }


let arr1=[2,5,4,6,3,1,0,10];
let arr2 = [15,6,4,10,101,23,5];

let newArr = diffOfArrays(arr1, arr2);
console.log(newArr);



/// flatten the nested array

function makeFlat(nestedArr) {
    let workArray = nestedArr.slice(0);
    let resultArray=[];
    for (let i = 0; i < workArray.length; i++) {
            if (Array.isArray(workArray[i])) {
                        for (let k =0; k < workArray[i].length; k++) {
                        resultArray.push(workArray[i][k]);
                        } 
            } else { 
                        resultArray.push(workArray[i]);
                    }
    } return resultArray;
}


function checkForNested (arr) {
    let nestedExist = false;
    for (let i = 0; i < arr.length; i++ ) {
        if (Array.isArray(arr[i])) {
            return true
        }
    } return nestedExist;
}


let someArr=[1,[2,5],[[24,26],3,[[4,5,10,15,[2,6,8],9]]],[5,6]];
let flat = makeFlat(someArr);
while (checkForNested(flat)) {
    flat = makeFlat(flat);
} 
console.log(flat);


//Union of two arrays, excluding dublicates

function unite(arr1, arr2){
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            arr1.push(arr2[i]);
        }
        
    } return arr1;
}

function sortAscending(arr){
    let anychange = true;
    let holder;
    
    while (anychange) {
            anychange = false;
            for (let i = 0; i < arr.length-1; i++) {
                if (arr[i] > arr[i+1]) {
                    anychange=true;
                    holder = arr[i+1];
                    arr[i+1] = arr[i];
                    arr[i]=holder;
                                
                    } 
                }
            }
         return arr;
}
let arr1=[2,5,6,4,9,50,8,100];
let arr2=[50,7,8,9,21];
let unitarr = unite(arr1,arr2);
unitarr = sortAscending(unitarr);
console.log(unitarr);




// indexes of the elements which sum satisfies the specified target
function sumsToTarget (arr, target){
 
    let resArr = [];
    
    for (let i = 0; i < arr.length; i++) {
       
        for (let j = 0; j < arr.length-1; j++) {
            if ((arr.indexOf(target-arr[i]) !== -1) && (arr.indexOf(target-arr[i])) !== i){
            resArr.push(i);
            resArr.push (arr.indexOf(target-arr[i]));
            return resArr;
            }
    }
}
return resArr;
}

let numbers = [10,50,30,60,40,50,60,10];
let result = sumsToTarget(numbers, 50);
console.log(result);




// ankap funkcia array lcnogh
function fillthearray(from, howmany){
    let resArray = []; 
    for(let i = from; ;i++) {
        resArray.push(i);
        if (resArray.length > howmany) {
            resArray.pop(); 
            break;
        }
    }return resArray;
}

let res = fillthearray(5,20);
console.log(res);




// faktorial count
function factorial (number){
    let faktorial = 1;
while ( number-1!==0 ){
    faktorial*=number;
    number=(number-1);
    }
return(faktorial);
}

let num=factorial(4);
console.log(num);