import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepTwo extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }

    decorate(): string {
        return this.decorateStepTwo();
    }

    decorateStepTwo(): string {
        return '2: Read over our menu.';
    }
}
