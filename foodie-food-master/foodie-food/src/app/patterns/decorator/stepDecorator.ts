import { Steps } from './steps';


export class StepDecorator implements Steps {
    // sets global private Steps variable
    private steps: Steps;
	
    // method used to add decoration to values
    decorate(): string {
        return this.steps.decorate();
    }
}
