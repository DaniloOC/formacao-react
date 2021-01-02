import { Cliente } from "./Cliente.js";
// import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.depositar(500);
let valorSacado = contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo);
console.log("Valor sacado:", valorSacado);

const contaPoupancaRicardo = new ContaPoupanca(100, cliente1, 1002);
console.log(contaPoupancaRicardo);
contaPoupancaRicardo.depositar(500);
let valorSacadoP = contaPoupancaRicardo.sacar(50);
console.log(contaPoupancaRicardo);
console.log("Valor sacado poupança:", valorSacadoP);

// const conta = new Conta(0, cliente1, 1003);