import React, { Component } from 'react'
import Card from './card'

export default class grid extends Component {
  constructor(props) {
    super(props)
    props.arr.forEach(item => props.arr.push(item))
    this.state = { 
      randArr: this.fisherYates(props.arr),
      
    }
  }

  fisherYates = arr => {
    let index = arr.length
    let tempVal
    let randIndex
    let idxArr = []

    while (0 !== index) {
        idxArr.push(index)
        randIndex = Math.floor(Math.random() * index)
        index -= 1
        tempVal = arr[index]
        arr[index] = arr[randIndex]
        arr[randIndex] = tempVal
    }

    return arr
  }

  render() {
    return (
      <div className="div container">
      <div className="row">
        {this.state.randArr.map( (item, idx) => (
          <div className="col-md-2 col-3 p-1 char-card" key={idx}>
            <Card defaultImage={item.defaultImage} image={item.image} />
          </div>
        ))}
      </div>
    </div>
    )
  }
}
