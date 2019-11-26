import { food } from './food';
export class dinner implements food{
    // returns the list of dinner options
    typeFood() {
        return ['Parmesan Chicken', 'House Fried Rice', 'Stuffed Peppers'];
    }
}