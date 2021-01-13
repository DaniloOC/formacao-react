import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './estilo.css'

class ListaDeCategorias extends Component {
  _handleEventoInput (e) {
    if (e.key === 'Enter') {
      const valorCategoria = e.target.value
      this.props.adicionarCategoria(valorCategoria)
    }
  }

  render () {
    return (
      <section className='lista-categorias'>
        <ul className='lista-categorias_lista'>
          {this.props.categorias.map((categoria, index) => {
            return <li key={index} className='lista-categorias_item'>{categoria}</li>
          })}
        </ul>
        <input type='text' className='lista-categorias_input' placeholder='Adicionar Categoria' onKeyUp={this._handleEventoInput.bind(this)}/>
      </section>
    )
  }
}

ListaDeCategorias.propTypes = {
  categorias: PropTypes.array,
  adicionarCategoria: PropTypes.func
}

export default ListaDeCategorias
