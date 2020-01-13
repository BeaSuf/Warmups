let counterH = 0;
let counterT = 0;

const coinFlip = function () {
    let random = Math.round(Math.random());
    if(random === 0) {
        console.log('HEADS');
        counterH++;
    } else {
        console.log('TAILS');
        counterT++;
    }         
}

const declareWinner = function () {
    while(counterH !== 5 && counterT !== 5){
        coinFlip();
    }
    
    const coinSide = counterH === 5 ? 'HEADS' : 'TAILS';
    console.log(`WINNER: ${coinSide}`);
    counterH = 0;
    counterT = 0;
}

declareWinner();