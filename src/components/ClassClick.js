import React, { Component } from 'react'

export default class ClassClick extends Component {

    clickHandler() {
        console.log('clicked the button using class component')
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}
