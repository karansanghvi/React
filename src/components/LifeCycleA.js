//? MOUNTING LIFECYCLE METHOD:
// when an instance of a component is being created and inserted into the DOM

//? UPDATING LIFECYCLE METHOD:
// when a component is being rendered as a result of changes to either its props or state
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export default class LifeCycleA extends Component {

    // function 1: mounting lifecycle method
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'karan'
      }
      console.log('LifecycleA constructor')
    }

    // function 2: mounting lifecycle method & updating lifecycle method
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    // function 3: mounting lifecycle method
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    // function 5: updating lifecycle method
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    // function 6: updating lifecycle method
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    // function 7: updating lifecycle method
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'hello world'
        })
    }

    // function 4: mounting lifecycle method & updating lifecycle method
  render() {
   console.log('LifecycleA render')
   return (
    <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
    </div>
   )
  }
}
