import React, { Component } from 'react'
import Nav from './components/nav'
import Grid from './components/grid'
import SuperheroArr from './components/superhero-array'
import Jumbotron from './components/jumbotron'
import Modal from './components/modal'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      arr: this.fisherYates(
        SuperheroArr
        .concat(
          SuperheroArr.map(
            obj => ({...obj})
          )
        )
        .map( (item, idx) => { item.id = idx; return item })),
      guesses: 0,
      gameOver: false
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

  endGame = () => {
    this.setState({ gameOver: true })
  }

  render() {
    return (
      <div className="text-center mb-1">
       <Nav guesses={this.state.guesses} /> 
        <Jumbotron guesses={this.state.guesses} gameOver={this.state.gameOver} />
        <Grid arr={this.state.arr} increment={this.increment} endGame={this.endGame}/>
      </div>
    )
  }
}

export default App
