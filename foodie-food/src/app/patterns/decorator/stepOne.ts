import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepOne extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }

    decorate(): string {
        return this.decorateStepOne();
    }

    decorateStepOne(): string {
        return '1: Log into the website via the Log In / Sign Up';
    }
}
