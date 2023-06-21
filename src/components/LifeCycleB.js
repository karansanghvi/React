//? MOUNTING LIFECYCLE METHOD:
// when an instance of a component is being created and inserted into the DOM

//? UPDATING LIFECYCLE METHOD:
// when a component is being rendered as a result of changes to either its props or state
import React, { Component } from 'react'

export default class LifeCycleB extends Component {

    // function 1: mounting lifecycle method
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'karan'
      }
      console.log('LifecycleB constructor')
    }

    // function 2: mounting lifecycle method & updating lifecycle method
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    // function 3: mounting lifecycle method
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    // function 5: updating lifecycle method
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    // function 6: updating lifecycle method
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    // function 7: updating lifecycle method
    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

    // function 4: mounting lifecycle method & updating lifecycle method
  render() {
   console.log('LifecycleB render')
   return (
    <div>
        <div>Lifecycle A</div>
        <LifeCycleB/>
        {/* in the above 2 lines of code we have Lifecycle A as the parent component & Lifecycle B as child component */}
    </div>
   )
  }
}
