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