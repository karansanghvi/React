import React from 'react'

export default function Greet(props) {
  return (
    <div>
      {/* <h1>this is a functional component</h1> */}
      <h1>Hello {props.name} a.k.a {props.heroName}</h1>
      {props.children}
    </div>
  )
}
