import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.depositar(500);
console.log(contaCorrenteRicardo);
let valorSacado = contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo);
console.log("Valor sacado:", valorSacado);

const cliente2 = new Cliente("Alice", 88822233309);

const conta2 = new ContaCorrente(1002, cliente2);

console.log(conta2);
contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);

console.log(cliente1);
console.log(cliente2);
console.log("Número de contas:", ContaCorrente.numeroDeContas);