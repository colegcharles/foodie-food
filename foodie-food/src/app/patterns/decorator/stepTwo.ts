import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepTwo extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }

    decorate(): string {
        return this.decorateStepOne();
    }

    decorateStepOne(): string {
        return '2: Check out our menu and pick a meal plan';
    }
}
