import React from 'react'

export default function Hello() {
    // ?WRITING TEXT WITH JSX
//   return (
//     <div>
//       <h1>this is text with jsx</h1>
//     </div>
//   )

    // ?WRITING TEXT WITHOUT JSX
return React.createElement(
    'div', 
    {id: 'hello', className: 'dummyClass'}, 
    React.createElement('h1', null, 'this is text without jsx')
    )
}
