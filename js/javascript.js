let imagesLunch = ['../images/buffet.jpeg', '../images/thaichicken.jpeg','../images/homecook.jpeg']
let imagesDinner = ['../images/hotpot.jpeg', '../images/barbeque.jpeg','../images/dishes.jpeg']
let imageLunchIndex = 0;
let imageDinnerIndex = 0;
function nextImage(element) {
    
    if (element.parentElement.classList == 'lunch') {
        imageLunchIndex =  (imageLunchIndex+1) % imagesLunch.length;
        element.parentElement.style.backgroundImage = `url(${imagesLunch[imageLunchIndex]})`

    }
    else {
        imageDinnerIndex =  (imageDinnerIndex+1) % imagesDinner.length;
        element.parentElement.style.backgroundImage = `url(${imagesDinner[imageDinnerIndex]})`
    }
}
function backImage(element) {
    if (element.parentElement.classList == 'lunch') {
        imageLunchIndex =  imageLunchIndex-1;
    if (imageLunchIndex < 0) {
        imageLunchIndex = imagesLunch.length-1;
    }
    element.parentElement.style.backgroundImage = `url(${imagesLunch[imageLunchIndex]})`

}
else {
    imageDinnerIndex -= 1;
    imageDinnerIndex = imageDinnerIndex < 0 ? imagesDinner.length-1: imageDinnerIndex;
    element.parentElement.style.backgroundImage = `url(${imagesDinner[imageDinnerIndex]})`
}
}