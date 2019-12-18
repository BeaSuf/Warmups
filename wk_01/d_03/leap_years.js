// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

for (let year = 1850; year <= 2150; year++) {
    if((year % 4 === 0 && year % 100 !== 0)/* || year % 400 === 0*/) {
        console.log(year);    
    }
}