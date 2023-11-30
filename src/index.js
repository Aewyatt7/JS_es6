console.log("Hello World");

// TODO
import { wishList } from './wishlist.js';
// Select the form element
const form = document.getElementById('submitForm');

// for make, model, and year input elements
const makeInput = document.getElementById('makeInput');
const modelInput = document.getElementById('modelInput');
const yearInput = document.getElementById('yearInput');

// For car details Paragraph elements
const carMakeP = document.getElementById('car-make');
const carModelP = document.getElementById('car-model');
const carYearP = document.getElementById('car-year');
const removeBtn = document.querySelector(".removeBtn");
const wishlist = new wishList();
// for remove button
form.addEventListener('submit', addCar);
removeBtn.addEventListener("click", removeCar);

// for UL  wishlist
const wishListUL = document.querySelector('#wishListContainer > ul');

function showCarDetails(car) {
    carMakeP.textContent = car.make;
    carModelP.textContent = car.model;
    carYearP.textContent = car.year;
    //enables the button - makes it clickable
    removeBtn.disabled = false;
    //saving the id for later use
    removeBtn.setAttribute('data-carId', car.id);
}

//creating the visual representation of our wishlist data
function updatedDOMList(){
    wishListUL.innerHTML = "";
    //iterate over the list
    wishlist.list.forEach((car, index, array) => {
        //create element
       const newLI = document.createElement("li");
       const newMake = document.createElement("p");
       const newModel = document.createElement("p");

        //modify the element
        newMake.textContent = `${car.make}` ;
        newModel.textContent = `${car.model}`;
        newLI.addEventListener("click",() => {
            showCarDetails(car);
        });
        //Append the element
        newLI.append(newMake, newModel);
        wishListUL.append(newLI);
    });
}

//This is an event handler function
function addCar(event) {
    event.preventDefault();
    wishlist.add(
        makeInput.value,
        modelInput.value,
        yearInput.value,
    );
updatedDOMList();
}
function removeCar(){
    //this gets the car's id on what to remove
    const carId = Number(removeBtn.getAttribute('data-carId'));
    wishlist.remove(carId);
    updatedDOMList();
    carMakeP.textContent = '';
    carModelP.textContent = '';
    carYearP.textContent = '';
    removeBtn.disabled = true;
}