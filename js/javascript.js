// for index.html
const imagesLunch = ['./images/buffet.jpeg', './images/thaichicken.jpeg','./images/homecook.jpeg']
const imagesDinner = ['./images/hotpot.jpeg', './images/barbeque.jpeg','./images/dishes.jpeg']
let imageLunchIndex = 0;
let imageDinnerIndex = 0;

let backarrows = document.getElementsByClassName('left-arrow');
let forwardarrows = document.querySelectorAll('.right-arrow');
forwardarrows.forEach(element => {
    element.addEventListener('click', (event) => {
        let div = element.parentElement.parentElement;
        if (div.classList == 'lunch') {
            imageLunchIndex =  (imageLunchIndex+1) % imagesLunch.length;
            div.style.backgroundImage = `url(${imagesLunch[imageLunchIndex]})`
    
        }
        else {
            imageDinnerIndex =  (imageDinnerIndex+1) % imagesDinner.length;
            div.style.backgroundImage = `url(${imagesDinner[imageDinnerIndex]})`
        }
    });
});
Array.from(backarrows).forEach(element => {
    element.addEventListener("click", (event) => {
        let div = element.parentElement.parentElement;
        console.log(div);
        if (div.classList == 'lunch') {
            imageLunchIndex =  imageLunchIndex-1;
        if (imageLunchIndex < 0) {
            imageLunchIndex = imagesLunch.length-1;
        }
        div.style.backgroundImage = `url(${imagesLunch[imageLunchIndex]})`
    
    }
    else {
        imageDinnerIndex -= 1;
        imageDinnerIndex = imageDinnerIndex < 0 ? imagesDinner.length-1: imageDinnerIndex;
        div.style.backgroundImage = `url(${imagesDinner[imageDinnerIndex]})`
    }
    })
});

