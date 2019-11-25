import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepFour extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }

    decorate(): string {
        return this.decorateStepFour();
    }

    decorateStepFour(): string {
        return '4: Head to the checkout page where you can see your total. Once complete hit submit, and a confirmation email will arrive in your inbox.';
    }
}
