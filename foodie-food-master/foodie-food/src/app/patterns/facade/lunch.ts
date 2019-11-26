import { food } from './food';
export class lunch implements food{
 
    // sets lunch food items
    typeFood() {
        return ['Fried Shrimp', 'Tuscan Bruschetta', 'Quesadilla'];
    }
}