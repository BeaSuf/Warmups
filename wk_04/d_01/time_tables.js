const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const timeTable = () => {
    arrNum.forEach(multiplicand => {
        console.log(`=== ${multiplicand} times table ===`);
        arrNum.forEach(multiplicator => {
            console.log(`${multiplicand} x ${multiplicator} = ${multiplicand * multiplicator}`);
        });
    });
} 

timeTable();