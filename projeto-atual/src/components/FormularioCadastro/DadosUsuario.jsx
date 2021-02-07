import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function DadosUsuario({aoEnviar, validacoes}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({senha: {valido: true, texto: ""}});

  function validarCampos(event) {
    const {name, value} = event.target;
    const ehValido = validacoes[name](value);
    const novoEstado = {...erros}
    novoEstado[name] = ehValido;
    setErros(novoEstado);
  }

  function possoEnviar() {
    for(let campo in erros) {
      if(!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar({email, senha});
      }
    }}>
      <TextField
        value={email}
        onChange={(event) => { setEmail(event.target.email)} }
        id='email'
        label='email'
        name='email'
        type='email'
        required
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => { setSenha(event.target.senha)} }
        onBlur={validarCampos}
        id='senha'
        label='senha'
        name='senha'
        type='password'
        variant='outlined'
        margin='normal'
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        fullWidth
      />
      <Button type='submit' variant='contained' color='primary'>
        Próximo
      </Button>
    </form>
  )
}

export default DadosUsuario
