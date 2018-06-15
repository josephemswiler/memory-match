import React, { Component } from 'react'
import './card.css'

export default class card extends Component {
  render() {
    return (
      <div className="character-image">
        <img src={ this.props.character } />
      </div>
    )
  }
}
