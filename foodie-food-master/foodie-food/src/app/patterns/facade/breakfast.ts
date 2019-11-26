import { food } from './food';
export class breakfast implements food{
    // return breakfast item list
    typeFood() {
        return ['Eggs and Bacon', 'Steak and Eggs', 'Cereal'];
    }
}