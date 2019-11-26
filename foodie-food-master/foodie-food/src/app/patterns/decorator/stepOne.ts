import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepOne extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }
  
    // returns step 1 value
    decorate(): string {
        return this.decorateStepOne();
    }
    
    // sets and returns the rules for step one
    decorateStepOne(): string {
        return '1: Log into the website via the Log In / Sign Up';
    }
}
