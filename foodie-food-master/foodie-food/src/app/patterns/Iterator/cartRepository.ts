import { Container } from './container';
import { Iterator } from './iterator';


class CartIterator implements Iterator {
  
    // sets class global variables
    names: string[] = [];
    index = 0;
    
    // sets the names array opun class creation
    constructor(values: string[]) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < values.length; i++) {
            this.names.push(values[i]);
        }
    }
 
    // sets method to check if end of arrays
    hasNext(): boolean {
        if (this.index < this.names.length) {
            return true;
        } else {
            return false;
        }
    }

    // method to find next value in array
    next(): any {
        if (this.hasNext()) {
            return this.names[this.index++];
        }
        return null;
    }


}

export class CartRepository implements Container {

    // method the returns to specific class Iterator
    getIterator(values: string[]): Iterator {
        return new CartIterator(values);
     }


}
