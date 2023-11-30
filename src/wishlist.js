import {Car} from './car.js';

export class wishList{
    constructor(){
    this.list = [];
    this.newxtId = 0;
    }
add(make, model, year) {
    const car = new Car(++this.newxtId, make, model, year);
    this.list.push(car);
}
remove(carId){
    this.list = this.list.filter((car) => car.Id !== carId);
}
}