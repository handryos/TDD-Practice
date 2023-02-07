export default class Dados {
    
    lista: number[];
    autenticador: boolean;
    
    constructor(a:number, b:number, c:number, d:number, e:number){ 
        this.lista = [a,b,c,d,e];
        this.autenticador = false;
}

    multiplicar(): void {
        let multiplicador = this.lista.map(function(numero: number){
            return numero * 10;
        })
    }

    verificador(): void {
        this.autenticador = false;
        let lista = this.lista;
        let verificador = this.lista.forEach(() => {
            if(lista.length > 5){
                this.autenticador = true;
            }})
            return verificador;
        }


    transformador(): void {
        let verificador: any = this.verificador();
        let multiplicador = this.lista.map(function(numero){
            return numero * 10 / 100
    })
        
        let resultado = multiplicador.forEach(function(){
            if (verificador === true){ 
                return multiplicador 
            }
            return resultado;
    })
        

}} 
