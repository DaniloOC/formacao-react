import React, { Component } from 'react'
import CardNota from './CardNota'

class ListaDeNotas extends Component {
  render () {
    return (
      <ul>
        {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria) => {
          return (
            <li key={categoria}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListaDeNotas
