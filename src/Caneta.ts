import  "../src/repository/Cores"
import Cores from "../src/repository/Cores";

export default class Caneta {

    tinta: number;
    cor: any;

    constructor() {
        this.tinta = 20;
        this.cor = new Cores; 
    }

    escrever(text: string): string {
        this.tinta -= text.length;
        return text;
    }

}
