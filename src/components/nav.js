import React, { Component } from 'react'
import './nav.css'

export default class nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Memory Match</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fab fa-linkedin"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fab fa-github-square"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fas fa-envelope-square"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
