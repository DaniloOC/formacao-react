import { cadastrarClientes } from '../../api/cliente';

const eventoEnvia = (form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = event.target.querySelector('[data-nome]');
    const cpf = event.target.querySelector('[data-cpf]');

    cadastrarClientes(nome.value, cpf.value);
  });
};

export default eventoEnvia;
