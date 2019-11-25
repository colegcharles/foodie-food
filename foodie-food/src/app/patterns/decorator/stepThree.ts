import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepThree extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }

    decorate(): string {
        return this.decorateStepThree();
    }

    decorateStepThree(): string {
        return '3: Add as many items as you\'d like to the cart';
    }
}
