import { StepDecorator } from './stepDecorator';
import { Steps } from './steps';


export class StepFour extends StepDecorator {

    constructor(steps: Steps) {
        super();
    }

    decorate(): string {
        return this.decorateStepOne();
    }

    decorateStepOne(): string {
        return '4: Once your order is placed the food will be delivered right to your door!';
    }
}
