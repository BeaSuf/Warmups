const warnTheSheep = function (arr) {
    let cnt = -1;

    let animal = '';
    while (animal !== 'wolf') {
        animal = arr.pop();
        cnt++;
    } 
    
    let msg = (cnt === 0) ? 
    'Pls go away and stop eating my sheep' :
    `Oi! Sheep number ${cnt}! You are about to be eaten by a wolf!`;  
    
    console.log(msg);
}

warnTheSheep(["sheep", "wolf", "sheep"]);
warnTheSheep(["wolf", "sheep", "sheep"]);
warnTheSheep(["sheep", "sheep", "wolf"]);
warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep"]);
warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]);
