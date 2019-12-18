let currentTemp = Number(prompt("What is the current temperature?"));
let isACFunctional = prompt("Is the A/C is functional?");
let desiredTemp = Number(prompt("What the temperature you wish it was?"));

var checkAC = function() {
    let msg = "No Problems";
    isACFunctional = isACFunctional.toLocaleLowerCase();
    isACFunctional = isACFunctional === 'yes' || isACFunctional === 'y' || isACFunctional === "true" || Number(isACFunctional) === 1;
    
    if(currentTemp > desiredTemp) {
        if(isACFunctional) {
            msg = "Turn on the A/C Please!";
        } else {
            msg = "Fix the A/C now! It's hot!";
        }
    } else {
        if(!isACFunctional) {
            msg = "Fix the A/C whenever you have the chance... It's cool...";
        }
    } 

    return msg;
}

alert(checkAC());


