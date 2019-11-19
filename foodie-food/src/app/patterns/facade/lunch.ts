import { food } from './food';
export class lunch implements food{
    typeFood() {
        return ['Fried Shrimp', 'Tuscan Bruschetta', 'Quesadilla'];
    }
}