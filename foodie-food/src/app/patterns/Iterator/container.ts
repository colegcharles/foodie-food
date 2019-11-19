import { Iterator } from './iterator';
export interface Container {
    getIterator(values: string[]): Iterator;
}