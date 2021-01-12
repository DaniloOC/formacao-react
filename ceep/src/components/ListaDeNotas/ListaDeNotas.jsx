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
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          )
        })}
      </ul>
    )
  }
}

ListaDeNotas.propTypes = {
  notas: PropTypes.array
}

export default ListaDeNotas
