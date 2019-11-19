import { food } from './food';
export class breakfast implements food{
    typeFood() {
        return ['Eggs and Bacon', 'Steak and Eggs', 'Cereal'];
    }
}