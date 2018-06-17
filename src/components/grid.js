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
    }
  }


  trackGuess = idx => {
    this.state.guesses.push(idx)
    // console.log(this.state.randArr[idx])
    if (!this.state.firstGuess) {
      this.setState({ firstGuess: idx })
      const arr = this.state.randArr
      arr[idx].show = true
      this.setState({ randArr: arr })
    } else if (!this.state.secondGuess) {
      this.setState({ secondGuess: idx })
      const arr = this.state.randArr
      arr[idx].show = true
      this.setState({ randArr: arr })
    } else {
      
      this.setState({ guesses: null })

    }
  }
  
  handleClick = idx => {

    if (!this.state.firstGuess) {

      this.setState({ firstGuess: idx })
      const arr = this.state.randArr
      arr[idx].show = true
      this.setState({ randArr: arr })

    } else if (!this.state.secondGuess) {

      this.setState({ secondGuess: idx })
      const arr = this.state.randArr
      arr[idx].show = true
      this.setState({ randArr: arr })

    } else {
      const arr = this.state.randArr
      // arr.forEach( item => item.show = false)

       if( this.state.firstGuess.name !== this.state.secondGuess.name ) {
         
        for ( let i in arr ) {
          if ( [this.state.firstGuess.id, this.state.secondGuess.id].includes(arr[i].id)) {
            arr[i].show = false
          }
        }
       }

      

      this.setState({ 
        randArr: arr,
        firstGuess: null,
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
