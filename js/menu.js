import food from './food.js'

const food_json = JSON.parse(food)
console.log(food_json)
const parent = document.getElementById("menu");
function addFood(foodData) {
 food_json.forEach(element => {


     let newdiv = document.createElement('div');
     newdiv.classList.add('foodDiv');
     let image = document.createElement('img')
     image.classList.add('food-img')
     let title = document.createElement('h2');
     title.classList.add('food-h2');
     let description = document.createElement('p');

     title.innerHTML = element.name;
     image.src = element.img;
     image.alt = element.alt;
     description.innerHTML = element.body;
     newdiv.appendChild(image);
     newdiv.appendChild(title);
     newdiv.appendChild(description);
     parent.appendChild(newdiv);

    });
}
addFood(food_json);


