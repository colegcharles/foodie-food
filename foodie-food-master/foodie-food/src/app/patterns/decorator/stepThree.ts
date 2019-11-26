import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepThree extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }
    // method to return step two values
    decorate(): string {
        return this.decorateStepThree();
    }

    // method to return the string of text for step 3
    decorateStepThree(): string {
        return '3: Add as many items as you\'d like to the cart';
    }
}
