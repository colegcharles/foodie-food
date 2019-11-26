import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepFour extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }

    // returns the step four text
    decorate(): string {
        return this.decorateStepFour();
    }
    
    // sets and returns rules for step 4
    decorateStepFour(): string {
        return '4: Head to the checkout page where you can see your total. Once complete hit submit, and a confirmation email will arrive in your inbox.';
    }
}
