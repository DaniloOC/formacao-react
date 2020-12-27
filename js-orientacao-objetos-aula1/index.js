import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.depositar(500);
console.log(contaCorrenteRicardo);
let valorSacado = contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo);
console.log("Valor sacado:", valorSacado);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

console.log(conta2);
contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);

console.log(cliente1);
console.log(cliente2);