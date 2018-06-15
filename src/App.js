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
import Blank from './images/q-mark.svg'

let superheroes = [
  {
    name: 'Batman',
    image: Batman,
    defaultImage: Blank
  },
  {
    name: 'Spiderman',
    image: Spiderman,
    defaultImage: Blank
  },
  {
    name: 'Captain America',
    image: CaptAmerica,
    defaultImage: Blank
  },
  {
    name: 'Dare Devil',
    image: DareDevil,
    defaultImage: Blank
  },
  {
    name: 'Flash',
    image: Flash,
    defaultImage: Blank
  },
  {
    name: 'Green Lantern',
    image: GreenLantern,
    defaultImage: Blank
  },
  {
    name: 'Hulk',
    image: Hulk,
    defaultImage: Blank
  },
  {
    name: 'Nick Fury',
    image: NickFury,
    defaultImage: Blank
  },
  {
    name: 'Punisher',
    image: Punisher,
    defaultImage: Blank
  },
  {
    name: 'Superman',
    image: Superman,
    defaultImage: Blank
  },
  {
    name: 'Thor',
    image: Thor,
    defaultImage: Blank
  },
  {
    name: 'Wolverine',
    image: Wolverine,
    defaultImage: Blank
  }
]

// $.fn.extend({
//   animateCss: function(animationName, callback) {
//     var animationEnd = (function(el) {
//       var animations = {
//         animation: 'animationend',
//         OAnimation: 'oAnimationEnd',
//         MozAnimation: 'mozAnimationEnd',
//         WebkitAnimation: 'webkitAnimationEnd',
//       }

//       for (var t in animations) {
//         if (el.style[t] !== undefined) {
//           return animations[t]
//         }
//       }
//     })(document.createElement('div'))

//     this.addClass('animated ' + animationName).one(animationEnd, function() {
//       $(this).removeClass('animated ' + animationName)

//       if (typeof callback === 'function') callback()
//     })

//     return this
//   },
// })

class App extends Component {
  render() {
    return (
      <div className="text-center">
       <Nav /> 
        <header className="app-header p-3 mb-1">
          <h1 className="app-title">Find the superhero pairs!</h1>
        </header>
        <Grid arr={superheroes} />
      </div>
    )
  }
}

export default App
