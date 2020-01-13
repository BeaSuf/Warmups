const all = document.querySelectorAll('.all');

let clickCounter = 0;

const changeColorGreen = () => {
    if(clickCounter === all.length) {
        all.forEach(box => {
            box.style.backgroundColor = 'green';
            clickCounter = 0;
        });
    }
}

const changeColorRed = box => {
    box.style.backgroundColor = 'red';
}

const handleColorChange = (event) =>{
    clickCounter++;    
    changeColorRed(event.target);
    changeColorGreen();    
}

all.forEach(box =>{
    box.addEventListener('click', handleColorChange);
})