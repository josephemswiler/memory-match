import React, { Component } from 'react'
import Nav from './components/nav'
import Grid from './components/grid'
import './App.css'

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
        <header className="app-header">
          <h1 className="app-title">Find the superhero pairs!</h1>
        </header>
        <Grid />
      </div>
    )
  }
}

export default App
