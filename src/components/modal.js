import React, { Component } from 'react';

export default class modal extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      guesses: props.guesses,
      gameOver: props.gameOver
    }
  }

  componentDidUpdate(prevProps) { 
    if ( prevProps !== this.props ) {
      this.setState({ 
        guesses: this.props.guesses,
        gameOver: this.props.gameOver
      })
    }
  }

  render() {
    // if(this.state.gameOver)
    //   return null

    return (
      <div className="modal" role="dialog" id="game-over-modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Congrats!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>You won in {this.state.guesses} guesses! Great job!</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success">Play Again</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
