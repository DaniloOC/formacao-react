const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

//Abrir a array
const numeros = [...numerosPares, ...numerosImpares];
console.log(numeros);

//Atribuir
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];
console.log(num1, num2, outrosNumeros);

//Valor padrão
const [num11, num21, outrosNumeros1 = 'Nada'] = [1, 2];
console.log(num11, num21, outrosNumeros1);

//Com objetos
const pessoa = {
    nome: 'Dan',
    idade: 33
};
const pessoaComTelefone = {...pessoa, telefone: 12345678};
console.log(pessoa, pessoaComTelefone);

//Atribuir propriedade
const { nome } = pessoa;
console.log(nome);

function imprimeDados({ nome, idade }) {
    console.log(nome, idade);
}

imprimeDados(pessoa);