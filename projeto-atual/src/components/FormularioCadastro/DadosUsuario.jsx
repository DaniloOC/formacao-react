import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function DadosUsuario({aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({email, senha});
    }}>
      <TextField
        value={email}
        onChange={(event) => { setEmail(event.target.email)} }
        id='email'
        label='email'
        type='email'
        required
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => { setEmail(event.target.senha)} }
        id='senha'
        label='senha'
        type='password'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <Button type='submit' variant='contained' color='primary'>
        Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuario
