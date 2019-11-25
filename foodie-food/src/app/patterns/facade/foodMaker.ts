import { food } from './food';
import { breakfast } from './breakfast';
import { lunch } from './lunch';
import { dinner } from './dinner';

export class foodMaker{
    public breakfast = new breakfast();
    public lunch = new lunch();
    public dinner = new dinner();


    foodMaker() {

    }

    getBreakfast() {
        return this.breakfast.typeFood();
    }

    getLunch() {
        return this.lunch.typeFood();
    }

    getDinner() {
        return this.dinner.typeFood();
    }
}