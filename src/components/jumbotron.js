import React, { Component } from 'react';
import './jumbotron.css'

export default class jumbotron extends Component {
  render() {
    return (
      <header className="app-header p-3 mb-1">
        <div className="jumbotron m-5">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-light btn-lg pill-btn w-50" href="#" role="button">Play Now!</a>
          </p>
        </div>
      </header>
    )
  }
}
