var age = Number(prompt("What is your age?"));

var checkAge = function() {
    let msg = "";
    return age < 18 ? "You are to young!" : "What drink would you like?";
}

alert(checkAge());

