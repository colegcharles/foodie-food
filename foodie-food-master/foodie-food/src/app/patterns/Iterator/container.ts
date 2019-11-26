import { Iterator } from './iterator';
export interface Container {
    // method to grab Iterator object
    getIterator(values: string[]): Iterator;
}