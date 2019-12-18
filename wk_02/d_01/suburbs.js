let suburb = '';
do {
    suburb = prompt("Where do you live?");
    if(suburb.trim() !== '') {
        alert(`You live in ${suburb}, I heard it's nice!`);
    } else {
        alert(`Please state where you live.`);
    }
} while (suburb.trim() === '')