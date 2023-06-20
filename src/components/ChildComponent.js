import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent

// to pass an parameter from the parent component to the child component &
// here is where we use the arrow function and now we can pass any no. of parameters
// to the onclick function