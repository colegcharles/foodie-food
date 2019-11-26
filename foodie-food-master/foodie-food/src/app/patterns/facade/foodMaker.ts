import { food } from './food';
import { breakfast } from './breakfast';
import { lunch } from './lunch';
import { dinner } from './dinner';

export class foodMaker{

    // sets class variables to be returned to user
    public breakfast = new breakfast();
    public lunch = new lunch();
    public dinner = new dinner();


    foodMaker() {

    }
    
    // called to get breakfast items
    getBreakfast() {
        return this.breakfast.typeFood();
    }

    // called to get lunch items
    getLunch() {
        return this.lunch.typeFood();
    }

    // called to get dinner items
    getDinner() {
        return this.dinner.typeFood();
    }
}