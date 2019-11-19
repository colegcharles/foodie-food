import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepThree extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }

    decorate(): string {
        return this.decorateStepOne();
    }

    decorateStepOne(): string {
        return '3: Look at the prices and finish your purchase by going to checkout';
    }
}
