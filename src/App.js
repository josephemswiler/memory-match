import React, { Component } from 'react'
import Nav from './components/nav'
import Grid from './components/grid'
import './App.css'

import Batman from './images/batman.svg'
import Spiderman from './images/spiderman.svg'
import CaptAmerica from './images/capt-america.svg'
import DareDevil from './images/dare-devil.svg'
import Flash from './images/flash.svg'
import GreenLantern from './images/green-lantern.svg'
import Hulk from './images/hulk.svg'
import NickFury from './images/nick-fury.svg'
import Punisher from './images/punisher.svg'
import Superman from './images/superman.svg'
import Thor from './images/thor.svg'
import Wolverine from './images/wolverine.svg'

let singleArr = [
  {
    name: 'Batman',
    image: Batman,
    show: false
  },
  {
    name: 'Spiderman',
    image: Spiderman,
    show: false
  },
  {
    name: 'Captain America',
    image: CaptAmerica,
    show: false
  },
  {
    name: 'Dare Devil',
    image: DareDevil,
    show: false
  },
  {
    name: 'Flash',
    image: Flash,
    show: false
  },
  {
    name: 'Green Lantern',
    image: GreenLantern,
    show: false
  },
  {
    name: 'Hulk',
    image: Hulk,
    show: false
  },
  {
    name: 'Nick Fury',
    image: NickFury,
    show: false
  },
  {
    name: 'Punisher',
    image: Punisher,
    show: false
  },
  {
    name: 'Superman',
    image: Superman,
    show: false
  },
  {
    name: 'Thor',
    image: Thor,
    show: false
  },
  {
    name: 'Wolverine',
    image: Wolverine,
    show: false
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      arr: this.fisherYates(
        singleArr
        .concat(
          singleArr.map(
            obj => ({...obj})
          )
        )
        .map( (item, idx) => { item.id = idx; return item })),
      guesses: 0
    }
  }

  fisherYates = arr => {
    let index = arr.length
    let tempVal
    let randIndex

    while (0 !== index) {
        randIndex = Math.floor(Math.random() * index)
        index -= 1
        tempVal = arr[index]
        arr[index] = arr[randIndex]
        arr[randIndex] = tempVal
    }
    return arr
  }

  increment = () => {
    let count = this.state.guesses + 1
    this.setState({ guesses: count })
  }

  render() {
    return (
      <div className="text-center mb-1">
       <Nav /> 
        <header className="app-header p-3 mb-1">
          <h1 className="app-title">{this.state.guesses}</h1>
        </header>
        <Grid arr={this.state.arr} increment={this.increment}/>
      </div>
    )
  }
}

export default App
