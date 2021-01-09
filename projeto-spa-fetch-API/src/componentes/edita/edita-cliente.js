import { detalhaCliente, editaCliente } from '../../api/cliente';
import validaCPF from '../validacao/validaCPF';

const eventoForm = (form) => {
  const pegaURL = new URL(window.location);

  const id = pegaURL.searchParams.get('id');

  const inputCPF = form.querySelector('[data-cpf]');
  const inputNome = form.querySelector('[data-nome]');

  detalhaCliente(id).then((dados) => {
    inputCPF.value = dados[0].cpf;
    inputNome.value = dados[0].nome;
  });

  const mensagemSucesso = (mensagem) => {
    const linha = document.createElement('section');

    const conteudoLinha = `
            <div class="alert alert-success" role="alert">${mensagem}</div>
        `;

    linha.innerHTML = conteudoLinha;
    return linha;
  };

  const mensagemErro = (mensagem) => {
    const linha = document.createElement('section');

    const conteudoLinha = `
            <div class="alert alert-warning" role="alert">${mensagem}</div>
        `;

    linha.innerHTML = conteudoLinha;
    return linha;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validaCPF(inputCPF.value)) {
      alert('Esse CPF não é valido');
      return;
    }

    editaCliente(id, inputCPF.value, inputNome.value)
      .then(() => {
        form.appendChild(mensagemSucesso('Cliente editado com Sucesso.'));
      })
      .catch(() => {
        form.appendChild(mensagemErro('Erro na edição do cliente.'));
      });
  });
};

export default eventoForm;
