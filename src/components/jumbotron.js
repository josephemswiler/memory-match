import React, { Component } from 'react';
import './jumbotron.css'

export default class jumbotron extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }


  render() {
    return (
      <header className="app-header p-3 mb-1">
        <div className="jumbotron m-5">
          <h1 className="display-4">Superpower? Memory.</h1>
          <p className="lead">The objective of this game is to find the superhero pairs in the fewest amount of guesses!</p>
          <hr className="my-4" />
          <p className="lead">
            <a className="btn btn-light btn-lg pill-btn pl-sm-5 pr-sm-5" href="#" role="button" onClick={this.playGame}><i className="fas fa-angle-down"></i> Play Now!</a>
          </p>
        </div>
      </header>
    )
  }
}
