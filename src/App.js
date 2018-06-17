import React, { Component } from 'react'
import Nav from './components/nav'
import Grid from './components/grid'
import SuperheroArr from './components/superhero-array'
import Jumbotron from './components/jumbotron'
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
      welcome: 'Match the superheroes pairs!'
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

  gameOver = () => {
    let count = this.state.guesses
    this.setState({ guesses: `You won in ${count} guesses!` })
  }

  render() {
    return (
      <div className="text-center mb-1">
       <Nav /> 
        {/* <header className="app-header p-3 mb-1">
          <h1 className="app-title">{this.state.guesses ? this.state.guesses : this.state.welcome}</h1>
          <button type="button" class="btn btn-light">Play</button>
        </header> */}
        <Jumbotron />
        <Grid arr={this.state.arr} increment={this.increment} gameOver={this.gameOver}/>
      </div>
    )
  }
}

export default App
