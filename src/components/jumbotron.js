import React, { Component } from 'react';
import './jumbotron.css'

export default class jumbotron extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      guesses: props.guesses,
      gameOver: props.gameOver
    }
  }
  
  componentDidUpdate(prevProps) { 
    if ( prevProps.gameOver !== this.props.gameOver ) {
      this.setState({ 
        guesses: this.props.guesses,
        gameOver: this.props.gameOver
      })
    }
  }

  playGame = () => {
    
  }

  gameMessage = () => {
    if (!this.state.gameOver) {
      return (
        <div className="jumbotron m-5">
          <h1 className="display-4">Congrats!</h1>
          <p className="lead">You won in <button className="btn btn-light btn-lg btn-counter pl-3 pr-3">{this.state.guesses}</button> guesses! Great job!</p>
          <hr className="my-4" />
          <p className="lead">
            <a className="btn btn-success btn-lg pill-btn pl-sm-5 pr-sm-5" href="#" role="button" onClick={() => window.location.reload()}>Play Again!</a>
          </p>
      </div>
      )
    } else {
      return (
        <div className="jumbotron m-5">
          <h1 className="display-4">Superpower? Memory.</h1>
          <p className="lead">The objective of this game is to find the superhero pairs in the fewest amount of guesses!</p>
          <hr className="my-4" />
          <p className="lead">
            <a className="btn btn-light btn-lg pill-btn pl-sm-5 pr-sm-5" href="#" role="button" onClick={this.playGame}><i className="fas fa-angle-down"></i> Play Now!</a>
          </p>
        </div>
      )
    }
  }

  render() {
    return (
      <header className="app-header p-3 mb-1">
        {this.gameMessage()}
      </header>
    )
  }
}
