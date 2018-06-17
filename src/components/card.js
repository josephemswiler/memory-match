import React, { Component } from 'react'
import Blank from '../images/q-mark.svg'
import './card.css'


export default class card extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      src: Blank,
      index: this.props.id,
      selected: this.props.show,
    } 
  }



  componentDidUpdate(prevProps) { 
    if ( prevProps.image !== this.props.image ) {
    this.setState({ 
      src: this.props.image,
      selected: this.props.show
    })
  }
  }
  
  render() {
    let selected = this.state.selected ? "selected-character-image" : "character-image";
    return (
      <div className={selected}>
        <img id={this.props.index} src={this.state.src} onClick={() => this.props.handleClick(this.state.index)}  />
      </div>
    )
  }
}
