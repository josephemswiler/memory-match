import React, { Component } from 'react'
import Blank from '../images/q-mark.svg'
import Card from './card'

export default class grid extends Component {
  constructor(props) {
    super(props)

    console.log(props)

    this.state = { 
      randArr: props.arr,
      firstGuess: null,
      secondGuess: null,
      // guesses: props.guesses
    }
  }
  
  handleClick = idx => {
    const arr = this.state.randArr
    const guess = {
      name: arr[idx].name,
      arrIndex: idx
    }

    if (arr[idx].show)
      return

    this.props.increment()

    if (!this.state.firstGuess) {

      arr[idx].show = true

      this.setState({ 
        randArr: arr,
        firstGuess: guess
      })

    } else if (!this.state.secondGuess) {

      if (idx === this.state.firstGuess.arrIndex)
        return

      arr[idx].show = true

      this.setState({ 
        randArr: arr,
        secondGuess: guess
      })

    } else {

      if ( this.state.firstGuess.name !== this.state.secondGuess.name ) {
        arr[this.state.firstGuess.arrIndex].show = false 
        arr[this.state.secondGuess.arrIndex].show = false 
      }

      arr[idx].show = true

      this.setState({ 
        randArr: arr,
        firstGuess: guess,
        secondGuess: null,
      })
    }
  }

  render() {
    return (
      <div className="div container">
      <div className="row">
        {this.state.randArr.map( (item, idx) => (
          <div className="col-md-2 col-3 p-1" key={idx} id={item.id}>
            <Card  
            id={idx} image={ item.show ? item.image : Blank} key={item.image} show={item.show} handleClick={this.handleClick} />
          </div>
        ))}
      </div>
    </div>
    )
  }
}
