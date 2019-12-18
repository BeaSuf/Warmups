var speakUp = function(){
    let responseSpeakUp = "HUH?!  SPEAK UP, SONNY!";
    let randomYears = Math.floor(Math.random() * 20);
    let responseHeared = `NO, NOT SINCE ${1930 + randomYears}!`;
    
    let talk = prompt("Say something to Grandma! 'BYE' for stop talking");
    
    while (talk !== 'BYE'){
        let talkLowerCase = talk.toLowerCase();
        (talk === talkLowerCase) ? alert(responseSpeakUp) : alert(responseHeared);
        talk = prompt("Say something to Grandma! 'BYE' for stop talking");
    }
}

speakUp();