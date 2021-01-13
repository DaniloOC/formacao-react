import React, { Component } from 'react'
import CardNota from '../CardNota'
import PropTypes from 'prop-types'
import './estilo.css'

class ListaDeNotas extends Component {
  render () {
    return (
      <ul className='lista-notas'>
        {this.props.notas.map((nota, index) => {
          return (
            <li className='lista-notas_item' key={index}>
              <CardNota
               apagarNota={this.props.apagarNota}
               indice={index}
               titulo={nota.titulo}
               texto={nota.texto}
               categoria={nota.categoria}/>
            </li>
          )
        })}
      </ul>
    )
  }
}

ListaDeNotas.propTypes = {
  notas: PropTypes.array,
  apagarNota: PropTypes.func
}

export default ListaDeNotas
