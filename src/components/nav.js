import React, { Component } from 'react'
import './nav.css'

export default class nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      guesses: props.guesses
    }
  }

  componentDidUpdate(prevProps) { 
    if ( prevProps.guesses !== this.props.guesses ) {
      this.setState({ 
        guesses: this.props.guesses
      })
    }
  }

  renderGuesses = () => {
    console.log(this.state.guesses)
    if (!this.state.guesses)
      return '00'
  
    if (parseInt(this.state.guesses) < 10) 
      return `0${this.state.guesses}`
    return this.state.guesses
  }
  render() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" >Memory Match!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/josephemswiler/"><i className="fab fa-linkedin"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/josephemswiler"><i className="fab fa-github-square"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:josephemswiler@gmail.com"><i className="fas fa-envelope-square"></i></a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-light btn-lg btn-counter">{this.renderGuesses()}</button>
      </nav>
    )
  }
}
