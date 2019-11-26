import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepTwo extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }
    
    // returns the step two values to user
    decorate(): string {
        return this.decorateStepTwo();
    }

    // returns step two values
    decorateStepTwo(): string {
        return '2: Read over our menu.';
    }
}
