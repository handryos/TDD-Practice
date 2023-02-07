import Caneta from "../src/Caneta";

test("Deve escrever algo", function () {
    const caneta = new Caneta();
    const text = caneta.escrever('Olá mundo!');
    expect(text).toBe("Olá mundo!");
});

test("Caneta deve perder tina quando escrever", function () {
    const caneta = new Caneta();
    expect(caneta.tinta).toBe(20);
    caneta.escrever('Olá mundo!');
    expect(caneta.tinta).toBe(10);
});
