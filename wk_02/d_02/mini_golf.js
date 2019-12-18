var totalScores = function(playerScoresArr){
    let total = 0;
    for (let i = 0; i < playerScoresArr.length; i++) {
        total += playerScoresArr[i];        
    }

    return total;
}

var compareToPar = function(parArr, playerScoresArr){
    let parDiff = [];
    for (let i = 0; i < playerScoresArr.length; i++) {
        parDiff.push(playerScoresArr[i] - parArr[i]);        
    }

    return parDiff;
}

var winningBets = function(parDiffArr){
    let totalWinnings = 0;
    for (let i = 0; i < parDiffArr.length; i++) {
        let diff = parDiffArr[i];
        totalWinnings += (diff > 0 && true) ? diff : 0;        
    }

    return totalWinnings;
}

let bobGolfCard = [3,2,6,11,9,2,6,9,10];
console.log(`Bob's score ${totalScores(bobGolfCard)}`);
let jimboGolfCard = [5,12,9,22,13,7,16,10,11];
console.log(`Jimbo's score ${totalScores(jimboGolfCard)}`);
let fishGolfCard = [2,2,4,5,4,3,6,4,1];
console.log(`Fish's score ${totalScores(fishGolfCard)}`);

console.log(`Group total score ${totalScores(bobGolfCard) + 
    totalScores(jimboGolfCard) + totalScores(fishGolfCard)}`);


let par = [3,4,5,5,3,3,4,3,5];
let bobParDiff = compareToPar(par, bobGolfCard)
console.log(`Bob's par diff ${bobParDiff}`);
let jimboParDiff = compareToPar(par, jimboGolfCard)
console.log(`Jimbo's par diff ${jimboParDiff}`);
let fishParDiff = compareToPar(par, fishGolfCard)
console.log(`Fish's par diff ${fishParDiff}`);

console.log(`Fish's winnings ${winningBets(bobParDiff) + winningBets(jimboParDiff)}`);



