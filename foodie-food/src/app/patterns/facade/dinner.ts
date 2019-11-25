import { food } from './food';
export class dinner implements food{
    typeFood() {
        return ['Parmesan Chicken', 'House Fried Rice', 'Stuffed Peppers'];
    }
}