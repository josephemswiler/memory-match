import React, { Component } from 'react'
import Card from './card'

import Batman from '../images/batman.svg'
import Spiderman from '../images/spiderman.svg'
import CaptAmerica from '../images/capt-america.svg'
import DareDevil from '../images/dare-devil.svg'
import Flash from '../images/flash.svg'
import GreenLantern from '../images/green-lantern.svg'
import Hulk from '../images/hulk.svg'
import NickFury from '../images/nick-fury.svg'
import Punisher from '../images/punisher.svg'
import Superman from '../images/superman.svg'
import Thor from '../images/thor.svg'
import Wolverine from '../images/wolverine.svg'

let superheroes = [
  Batman,
  Spiderman,
  CaptAmerica,
  DareDevil,
  Flash,
  GreenLantern,
  Hulk,
  NickFury,
  Punisher,
  Superman,
  Thor,
  Wolverine,
  Batman,
  Spiderman,
  CaptAmerica,
  DareDevil,
  Flash,
  GreenLantern,
  Hulk,
  NickFury,
  Punisher,
  Superman,
  Thor,
  Wolverine
]

fisherYates = (arr) => {
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

export default class grid extends Component {
  state = {

  }

  render() {
    return (
      <div className="div container">
      <div className="row">
        {superheroes.map(name => (
          <div className="col-md-2 col-3 p-1">
            <Card character={name}/>
          </div>
        ))}
      </div>
    </div>
    )
  }
}
