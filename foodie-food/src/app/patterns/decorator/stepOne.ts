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
        return '1: Create an account by clicking Log In';
    }
}
