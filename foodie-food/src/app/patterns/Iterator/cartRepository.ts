import { Container } from './container';
import { Iterator } from './iterator';


class CartIterator implements Iterator {
    names: string[] = [];
    index = 0;

    constructor(values: string[]) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < values.length; i++) {
            this.names.push(values[i]);
        }
    }

    hasNext(): boolean {
        if (this.index < this.names.length) {
            return true;
        } else {
            return false;
        }
    }

    next(): any {
        if (this.hasNext()) {
            return this.names[this.index++];
        }
        return null;
    }


}

export class CartRepository implements Container {


    getIterator(values: string[]): Iterator {
        return new CartIterator(values);
     }


}
