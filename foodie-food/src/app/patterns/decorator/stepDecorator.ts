import { Steps } from './steps';


export class StepDecorator implements Steps {
    private steps: Steps;

    decorate(): string {
        return this.steps.decorate();
    }
}
