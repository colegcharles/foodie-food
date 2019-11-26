


export abstract class NavBar {
    
    // abstract method to initialize hierarchy
    abstract initialize(): string;

    // method to display to used specificy fields
    show(): string {
        return this.initialize();
    }


}
