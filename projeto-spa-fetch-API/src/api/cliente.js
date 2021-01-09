const listarClientes = () => fetch('http://localhost:4000/clientes')
  .then((resposta) => resposta.json())
  .then((json) => json);

const cadastrarClientes = (nome, cpf) => {
  const json = JSON.stringify({ nome, cpf });
  return fetch('http://localhost:4000/clientes/cliente', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: json,
  })
    .then((resp) => resp.body);
};

const deletaCliente = (id) => fetch(`http://localhost:4000/clientes/cliente/${id}`, { method: 'DELETE' });

const detalhaCliente = (id) => fetch(`http://localhost:4000/clientes/cliente/${id}`, { method: 'GET' })
  .then((resposta) => resposta.json());

const editaCliente = (id, cpf, nome) => {
  const json = JSON.stringify(nome, cpf);
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: json,
  })
    .then((resp) => resp.body);
};

export {
  listarClientes,
  deletaCliente,
  detalhaCliente,
  editaCliente,
  cadastrarClientes,
};
