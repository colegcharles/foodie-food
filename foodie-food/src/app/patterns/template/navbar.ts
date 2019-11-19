


export abstract class NavBar {

    abstract initialize(): string;


    show(): string {
        return this.initialize();
    }


}
