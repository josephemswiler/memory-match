import React, { Component } from 'react'
import './card.css'

export default class card extends Component {
  constructor(props) {
    super(props)
    
  }

  check = () => {

  }

  render() {
    return (
      <div className="character-image">
        <img src={ this.props.image } onClick={this.check} />
      </div>
    )
  }
}
