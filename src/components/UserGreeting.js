import React, { Component } from 'react'

export default class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    

  render() {

    // ?APPROACH 1: USING IF ELSE LOOP FOR CONDITIONAL RENDERING
    // if(this.state.isLoggedIn) {
    //     return (
    //         <div>Welcome Karan</div>
    //     )
    // }
    // else {
    //     return (
    //         <div>Welcome Guest</div>
    //     )
    // }

    // ?APPROACH 2: USE JS VARIABLES TO STORE ELEMENTS WHICH WILL ALSO
    // ?            HELP TO RENDER THE ENTIRE COMPONENT OR ONLY A PART FOR CONDITIONAL RENDERING

    // this message variable stores the element to be rendered
    // let message 
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Karan</div>
    // }
    // else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // ?APPROACH 3: USING TERNARY OPERATOR FOR CONDITIONAL RENDERING
    // return (
    //     this.state.isLoggedIn ? (
    //         <div>Welcome Karan</div>
    //     ) : (
    //         <div>Welcome Guest</div>
    //     )
    // )

    // ?APPROACH 4: SHORT CIRUCUIT OPERATOR FOR CONDITONAL RENDERING
    // ? (USED WHEN YOU WANT TO RENDER SOMETHING OR NOTHING)
    return this.state.isLoggedIn && <div>Welcome Karan</div>

    // return (
    //   <div>
    //     <div>
    //         Welcome Karan
    //     </div>
    //     <div>
    //         Welcome Guest
    //     </div>
    //   </div>
    // )
  }
}

// !NOTE: PREFER TERNARY OPERATOR OR SHORT CIRCUIT OPERATOR FOR CONDITIONAL RENDERING