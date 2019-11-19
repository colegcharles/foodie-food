import { food } from './food';
import { breakfast } from './breakfast';
import { lunch } from './lunch';

export class foodMaker{
    public breakfast = new breakfast();
    public lunch = new lunch();



    foodMaker() {

    }

    getBreakfast() {
        return this.breakfast.typeFood();
    }

    getLunch() {
        return this.lunch.typeFood();
    }
}