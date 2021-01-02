import { Cliente } from "./Cliente.js";
// import { Conta } from "./Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309, "456");

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

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 12345687901);

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");
console.log("estaLogado", estaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "456");
console.log("clienteLogado", clienteEstaLogado);
