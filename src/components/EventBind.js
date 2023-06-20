import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler() {
    //     this.setState({
    //         message: 'goodbye'
    //     })
    //     console.log(this)
    // }

    // APPROACH 4: USING THE CLASS PROPERTIES AS ARROW FUNCTIONS FOR BINDING EVENTS
    clickHandler = () => {
        this.setState({
            message: 'goodbye'
        })
    }

  render() {
    return (
      <div> {this.state.message}
      <br />
        {/* APPROACH 1: TO USE THE BIND FUNCTION FOR BINDING EVENT */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* APPROACH 2: TO USE THE ARROW FUNCTION FOR BINDING EVENT */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* APPROACH 3: TO USE THE CONSTRUCTOR FOR BINDING THE EVENT */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind

// NOTE: Approach 3 and Approach 4 is suggested approach to use for binding the event