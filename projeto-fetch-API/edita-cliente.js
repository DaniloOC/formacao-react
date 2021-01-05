const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');
console.log("id:", id);

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');
console.log(inputCPF, inputNome);

detalhaCliente(id).then( dados => {
    console.log("dados:", dados[0]);
    inputCPF.value = dados[0].cpf;
    inputNome.value = dados[0].nome;
});

const formEdicao = document.querySelector("[data-form]");
formEdicao.addEventListener('submit', event => {
    event.preventDefault();

    if(!validaCPF(inputCPF.value)) {
        alert("Esse CPF não é valido");
        return
    }

    editaCliente(id, inputCPF.value, inputNome.value);
});