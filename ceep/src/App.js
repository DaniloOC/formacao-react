import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      notas: [],
      categorias: []
    }
  }

  criarNota (titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota (index) {
    const arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    this.setState({ notas: arrayNotas })
  }

  adicionarCategoria (nomeCategoria) {
    const novoArrayCategoria = [...this.state.categorias, nomeCategoria]
    const novoEstado = { ...this.state, categorias: novoArrayCategoria }
    this.setState(novoEstado)
  }

  render () {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className='conteudo-principal'>
          <ListaDeCategorias adicionarCategoria={this.adicionarCategoria.bind(this)} categorias={this.state.categorias}/>
          <ListaDeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas}/>
        </main>
      </section>
    )
  }
}

export default App
