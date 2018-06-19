import React, { Component } from 'react'
import Nav from './components/nav'
import Grid from './components/grid'
import SuperheroArr from './components/superhero-array'
import Jumbotron from './components/jumbotron'
import * as Scroll from 'react-scroll';
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

  componentDidMount() {
    window.addEventListener('load', this.smoothScrollTop)
 }

 smoothScrollTop = () => {
  Scroll.animateScroll.scrollToTop({
    duration: 1000,
    delay: 100,
    smooth: true
  })
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

  playGame = () => {
    Scroll.scroller.scrollTo('grid', {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  increment = () => {
    let count = this.state.guesses + 1
    this.setState({ guesses: count })
  }

  endGame = () => {
    this.setState({ gameOver: true })
    this.smoothScrollTop()
  }

  resetGame = () => {
    const resetArr = this.state.arr
    resetArr.forEach( item => item.show = false )
    this.fisherYates( resetArr )
    this.setState({ 
      gameOver: false,
      arr: resetArr,
      guesses: 0
    })
    this.playGame()
  }

  render() {
    return (
      <div className="text-center mb-1">
        <Nav guesses={this.state.guesses} /> 
        <Jumbotron guesses={this.state.guesses} gameOver={this.state.gameOver} playGame={this.playGame} resetGame={this.resetGame} />
        <div className="grid-wrapper">
          <Grid name="grid" arr={this.state.arr} increment={this.increment} endGame={this.endGame} />
        </div>
      </div>
    )
  }
}

export default App
