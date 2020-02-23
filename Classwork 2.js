// classwork 2 Ex 5 
// I know that this was solved at the lesson, but the point is I left early that day
function find_nearest_powof_2(anyNumber) {
    let remains = anyNumber;
    let power = 0; 
    do {remains = remains/2;
        power+=1;}
    while (remains >= 2);
let powerTwo = 1 ;
    for (let i = 0; i <=power; i++ ) {
        powerTwo*=2;
    }
return powerTwo;
}

function powers_oftwo(low, upp) {
    let powersArray = [];
    for ( let i = find_nearest_powof_2(low), j=0; i <= upp; i*=2 ) {
        powersArray[j] = i;
        j++
    }
    return powersArray;
}


//let a  = powers_oftwo(31,1500);
//console.log(a);



// classwork 2 Ex.6

function dash_inserter(phone) {
    let str = String(phone);
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if((+str[i])%2 === 0 && (+str[i+1])%2 === 0) {
            newStr+=str[i] + '-';
        } else { newStr+=str[i];}
    }
    return newStr;
}


//let phonenum = dash_inserter (444444);
//console.log(phonenum);



//classwork 2 Ex 23.

function x_drawer(anyNum) {
   
        let rowDraw = '';
        for (let i = 0; i < (2*anyNum)+1; i++ ) {
            rowDraw ='';
            for (let j = 0; j <= 2*anyNum; j++){
                if ( j === i || j === 2*anyNum-i) {
                     rowDraw += '*';
                    } else { rowDraw += ' ';}           
            }
        rowDraw+='\n';
        console.log(rowDraw);
        }
          
}

let drawing = x_drawer(4);
