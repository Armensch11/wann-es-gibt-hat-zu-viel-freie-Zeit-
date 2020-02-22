//Perfect number finder

//divisions of the number
function divides_to (check_Num) {
    arrayof_Divisors = [];
    for (let i = 1, j = 0; i <= check_Num/2 ; i++) {
        if ( check_Num % i === 0) {
            arrayof_Divisors.push(i);
            j++;
        }
    }
    return arrayof_Divisors;
}
//finding perfect numbers
function perfects_inthe_range (lower,upper) {
   for (i = lower; i <= upper; i++) {
       let sum = 0;
       let divisors = divides_to(i);
       for ( let j = 0; j < divisors.length; j++) {
           sum += divisors[j];
           if (j === divisors.length-1 && sum === i) {
               console.log (`${i} is perfect`);
           }
       }
   }
}

let something = perfects_inthe_range(0,10000);
