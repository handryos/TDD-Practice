import Dados from "../src/Dados"

test("Deve ler os dados em uma lista e retorna-los multiplica-los", function(){
    const dados =  new Dados(10, 20, 30, 40, 50);
    const teste = dados.multiplicar();
    const resultado = dados.lista;
    expect(teste).toEqual([100, 200, 300, 400, 500]);
})

test("Deve ler os dados em uma lista e validar caso o tamanho seja autentico", function(){
    const dados = new Dados(10, 20, 30,40,50);
    const resultado = dados.lista;
    expect(resultado).toHaveLength(5);

})

test("Deve retornar o resultado total de uma multiplicação em porcentagem", function(){
    const dados = new Dados(10, 20, 30,40,50);
    const resultado = dados.lista;
    expect(resultado).toBe(resultado);
    
})



