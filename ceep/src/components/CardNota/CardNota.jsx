import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './estilo.css'

class CardNota extends Component {
  render () {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    )
  }
}

CardNota.propTypes = {
  titulo: PropTypes.string,
  texto: PropTypes.string
}

export default CardNota
